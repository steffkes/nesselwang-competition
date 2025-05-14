<script setup>
const name = ref("");
const email = ref("");
const phone = ref("");
const origin = ref("");
const interests = ref([]);

const isLoading = ref(false);
const isSent = ref(false);

async function contactForm() {
  isLoading.value = true;
  await $fetch('/api/interest', {
    method: 'POST',
    body: {
        name: name.value,
        email: email.value,
        phone: phone.value,
        origin: origin.value,
        interests: interests.value
    }
  })
  isLoading.value = false;
  isSent.value = true;
}
</script>

<template>
    <div v-if="isSent" class="notification is-success">
        <p><strong>Danke =) Wir freuen uns, dass du dich freust!</strong> Wir melden uns, sobald es etwas Neues gibt zur Nesselwang Competition &mdash; stay tuned!</p>

        <p class="mt-4">Bei Fragen, Ideen bzw. Anregungen: meld dich einfach jederzeit bei uns.</p>
    </div>

    <form v-else @submit.prevent="contactForm">
        <div class="field">
            <label class="label">Name *</label>
            <div class="control">
                <input v-model="name" type="text" class="input" placeholder="Dein Name"
                required :disabled="isLoading">
            </div>
        </div>

        <div class="field">
            <label class="label">eMail *</label>
            <div class="control">
                <input v-model="email" type="email" class="input" placeholder="Deine eMail-Adresse"
                required :disabled="isLoading">
            </div>
        </div>

        <div class="field">
            <label class="label">Handy-Nummer *</label>
            <div class="control">
                <input v-model="phone" type="tel" class="input" placeholder="Deine Handy-Nummer"
                required :disabled="isLoading">
            </div>
        </div>

        <div class="field">
            <label class="label">Herkunft *</label>
            <div class="control">
                <input v-model="origin" type="text" class="input" placeholder="Woher kommst du / bei welcher Organisation?"
                required :disabled="isLoading">
            </div>
        </div>

        <div class="field">
            <label class="label">Interesse</label>
            <div class="control">
                <label class="checkbox mr-2">
                    <input v-model="interests" type="checkbox" value="Einzel"
                    :disabled="isLoading">
                    Einzel
                </label>
                <label class="checkbox">
                    <input v-model="interests" type="checkbox" value="Staffel"
                    :disabled="isLoading">
                    Staffel
                </label>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button type="submit" class="button is-primary"
                :class="{
                    'is-loading': isLoading
                }">Submit</button>
            </div>
        </div>
    </form>

</template>