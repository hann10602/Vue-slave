<script setup lang="ts">
import { Field, useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const drinks = ['Coffee', 'Tea', 'Coke']

const userSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  drink: yup.array().of(yup.string()).required(),
})

type UserType = yup.InferType<typeof userSchema>

const { errors, handleSubmit } = useForm<UserType>({
  validationSchema: userSchema,
  initialValues: {
    username: 'qfwfqwf123',
    email: 'hann@gmail.com',
    password: '234234234',
    drink: ['Coffee'],
  },
})

const onSubmit = handleSubmit((value) => {
  console.log(value)
})

const { value: username } = useField('username')
</script>

<template>
  <div class="">
    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Username: </label>
        <input id="username" class="text-black" type="text" v-model="username" />
        <span>{{ errors.username }}</span>
      </div>
      <div>
        <label for="email">Email: </label>
        <Field name="email" v-slot="{ field }">
          <input id="email" class="text-black" type="text" v-bind="field" />
          <span>{{ errors.email }}</span>
        </Field>
      </div>
      <div>
        <label for="password">Password: </label>
        <Field name="password" v-slot="{ field }">
          <input id="password" class="text-black" type="password" v-bind="field" />
          <span>{{ errors.password }}</span>
        </Field>
      </div>
      <div>
        <Field
          v-for="drink in drinks"
          name="drink"
          type="checkbox"
          :key="drink"
          v-slot="{ field }"
          :value="drink"
          multiple
        >
          <label for="">{{ drink }}</label>
          <input type="checkbox" v-bind="field" :value="drink" />
        </Field>
        <span>{{ errors.drink }}</span>
      </div>
      <button class="p-2 bg-blue-200">Submit</button>
    </form>
  </div>
</template>
