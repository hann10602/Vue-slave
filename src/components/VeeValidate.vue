<script setup lang="ts">
import { useForm } from 'vee-validate'

type FormValues = {
  username: string
  email: string
  password: string
}

const {
  values,
  errors,
  meta,
  isSubmitting,
  submitCount,
  validate,
  validateField,
  handleSubmit,
  resetForm,
  setFieldValue,
  setFieldError,
  setValues,
  setErrors,
  setTouched,
  setFieldTouched,
  defineField,
} = useForm<FormValues>()

const [username, usernameMeta, usernameAction] = defineField('username')
</script>

<template></template>
