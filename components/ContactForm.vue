<script setup lang="ts">
import {
  safeParse,
  flatten,
  type InferInput,
  type FlatErrors,
} from 'valibot'
import {ContactSchema} from "~/schemata/ContactSchema";

const formModel: InferInput<typeof ContactSchema> = reactive({
  betreff: '',
  email: '',
  text: '',
})

const issues = ref<FlatErrors<typeof ContactSchema>['nested']>()

interface IFormSchema {
  name: keyof InferInput<typeof ContactSchema>
  type: 'input' | 'textarea',
  autocomplete?: string
}

const formSchema: IFormSchema[] = [
  {name: 'betreff', type: 'input', autocomplete: 'off'},
  {name: 'email', type: 'input'},
  {name: 'text', type: 'textarea', autocomplete: 'off'},
]

const submitForm = async () => {
  try {
    const validation = safeParse(ContactSchema, formModel)
    if (!validation.success) {
      issues.value = flatten(validation.issues).nested
      return
    }
    // await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: {
    //     email: formModel.email,
    //     text: formModel.text,
    //     betreff: formModel.betreff
    //   },
    // })
  } catch {
  }
}

function getIssue(name: keyof InferInput<typeof ContactSchema>) {
  return issues.value?.[name]
}
</script>

<template>
  <address class="flex flex-col gap-4 not-italic">
    <div>
      <Icon name="material-symbols:mail" class="icon"/>
      <a href="mailto:info@vt-immobilien.com" class="font-normal">info@vt-immobilien.com</a>
    </div>
  </address>
  <SocialSection class="my-4"/>
  <form
      class="flex flex-col gap-2 card"
      @submit.prevent="submitForm"
  >
    <label
        v-for="form in formSchema"
        :key="form.name"
    >
        <span
            class="capitalize text-lg font-semibold"
            v-text="`${form.name}*`"
        />
      <component
          :is="form.type"
          @input="formModel[form.name] = $event.target.value"
          v-bind="form"
          type="text"
          class="w-full border rounded p-2 bg-transparent"
          :class="{ 'border border-red-600': getIssue(form.name), 'min-h-24' :form.type === 'textarea' }"
      />
      <span
          v-for="issue in getIssue(form.name)"
          v-show="issue"
          class="issue"
          v-text="issue"
      />
    </label>
    <p>
      Bitte beachten Sie unsere
      <NuxtLink to="/legal/privacy" class="underline">Datenschutzerklärung</NuxtLink>
      .
    </p>
    <div class="flex justify-end mt-2">
      <button class="base-button max-w-max uppercase font-semibold">
        senden
      </button>
    </div>
  </form>
</template>

<style scoped>
textarea {
  scroll-padding-block: 8px;
}

.issue {
  @apply text-red-600;
}

.icon {
  @apply p-4 h-10 w-10;
}

address > div {
  @apply flex items-center gap-6;
}

input, textarea {
  @apply focus:outline-none focus:border-black focus:ring-1 focus:ring-black;
}
</style>
