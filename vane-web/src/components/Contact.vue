<template lang="">
  <div class="bg-stone-600 flex-col lg:flex-row flex w-full lg:h-auto">
    <div
      class="text-white text-6xl py-16 font-perandory font-semibold text-center flex flex-col gap-5 justify-center lg:hidden"
    >
      <h1>Contacto</h1>
      <div class="flex flex-col text-6xl font-perandory">
        <h3 class="text-2xl italic">Reserva tu sesión</h3>
        <!-- <h3 class="text-2xl italic">haz una consulta</h3> -->
      </div>
    </div>
    <div class="lg:w-1/2 bg-white">
      <div
        class="w-96 py-7 px-5 bg-slate-50-content mx-auto my-20 flex flex-col gap-6 justify-center shadow-2xl shadow-secondary-content"
      >
        <input
          type="text"
          placeholder="Nombre"
          v-model="form.name"
          :class="[
            'input w-full focus:input-warning max-w-xs rounded-none bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-lg placeholder:text-white duration-75 ease-in-out transition-all',
            errors.name ? 'border-red-700 border-solid border-2' : '',
            form.name && !errors.name
              ? 'border-green-500 border-solid border-2'
              : '',
          ]"
          @blur="validateField('name')"
          @input="cleanField('name')"
        />
        <span
          v-if="errors.name"
          class="text-xs text-center -my-5 text-red-500 font-extrabold"
          >{{ errors.name }}</span
        >

        <input
          type="text"
          placeholder="Teléfono"
          v-model="form.phone"
          :class="[
            'input focus:input-warning rounded-none w-full max-w-xs bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-lg placeholder:text-white duration-75 ease-in-out transition-all',
            errors.phone ? 'border-red-700 border-solid border-2' : '',
            form.phone && !errors.phone
              ? 'border-green-500 border-solid border-2'
              : '',
          ]"
          @blur="validateField('phone')"
          @input="cleanField('phone')"
        />
        <span
          v-if="errors.phone"
          class="text-xs text-center -my-5 text-red-500 font-extrabold"
          >{{ errors.phone }}</span
        >

        <input
          type="text"
          placeholder="E-mail"
          v-model="form.email"
          :class="[
            'input focus:input-warning rounded-none w-full max-w-xs bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-lg placeholder:text-white duration-75 ease-in-out transition-all',
            errors.email ? 'border-red-700 border-solid border-2' : '',
            form.email && !errors.email
              ? 'border-green-500 border-solid border-2'
              : '',
          ]"
          @blur="validateField('email')"
          @input="cleanField('email')"
        />
        <span
          v-if="errors.email"
          class="text-xs text-center -my-5 text-red-500 font-extrabold"
          >{{ errors.email }}</span
        >

        <input
          type="text"
          placeholder="Tema"
          v-model="form.subject"
          :class="[
            'input focus:input-warning rounded-none w-full max-w-xs bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-lg placeholder:text-white duration-75 ease-in-out transition-all',
            errors.subject ? 'border-red-700 border-solid border-2' : '',
            form.subject && !errors.subject
              ? 'border-green-500 border-solid border-2'
              : '',
          ]"
          @blur="validateField('subject')"
          @input="cleanField('subject')"
        />
        <span
          v-if="errors.subject"
          class="text-xs text-center -my-5 text-red-500 font-extrabold"
          >{{ errors.subject }}</span
        >

        <textarea
          :class="[
            'textarea focus:textarea-warning rounded-none bg-secondary-content bg-opacity-30 mx-2 text-white font-playfair text-lg placeholder:text-white duration-75 ease-in-out transition-all',
            errors.text ? 'border-red-700 border-solid border-2' : '',
            form.text && !errors.text
              ? 'border-green-500 border-solid border-2'
              : '',
          ]"
          placeholder="Mensaje"
          v-model="form.text"
          rows="7"
          @blur="validateField('text')"
          @input="cleanField('text')"
        ></textarea>
        <span
          v-if="errors.text"
          class="text-xs text-center -my-5 text-red-500 font-extrabold"
          >{{ errors.text }}</span
        >

        <button
          :class="[
            'btn btn-accent bg-secondary-content rounded-none text-white mt-2',
            state.error ? 'bg-error' : '',
            state.success ? 'bg-success' : '',
          ]"
          @click="submitForm"
        >
          <p v-if="!state.isWaiting && !state.success && !state.error">
            Enviar
          </p>
          <span
            class="loading loading-dots loading-md"
            v-if="state.isWaiting"
          ></span>
          <p v-if="!state.isWaiting && state.success && !state.error">
            Success!
          </p>
          <p v-if="!state.isWaiting && !state.success && state.error">Error!</p>
        </button>
      </div>
    </div>

    <div
      class="text-orange-50 lg:text-6xl font-perandory font-semibold text-center lg:flex flex-col gap-5 justify-center hidden md:w-1/2"
    >
      <h1>Contacto</h1>
      <div class="flex flex-col text-6xl">
        <h3 class="text-2xl italic">Reserva tu sesión</h3>
        <!-- <h3 class="text-2xl italic">haz una consulta</h3> -->
      </div>
    </div>
  </div>
</template>
<script setup>
  import { reactive } from "vue";
  import { API_URL } from "../main";

  const errors = reactive({
    name: "",
    phone: "",
    email: "",
    subject: "",
    text: "",
  });

  const form = reactive({
    name: "",
    phone: "",
    email: "",
    subject: "",
    text: "",
  });

  const validation = reactive({
    name: false,
    phone: false,
    email: false,
    subject: false,
    text: false,
  });

  const state = reactive({
    isWaiting: false,
    success: false,
    error: false,
  });

  function isValidEmail() {
    let email = form.email;
    if (!email.length > 0) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateStringMin(string, min) {
    return string.length >= min;
  }

  function validateStringMax(string, max) {
    return string.length <= max;
  }

  function validateString(string) {
    return string.length > 0;
  }

  function validateField(type) {
    switch (type) {
      case "email":
        if (!isValidEmail) {
          errors.email = "Ingrese un e-mail válido";
        }
        break;
      case "name":
        if (!validateStringMin(form.name, 3)) {
          errors.name = "Mínimo de 3 caracteres";
        }
        if (!validateStringMax(form.name, 20)) {
          errors.name = "Mäximo de 20 caracteres";
        }
        break;
      case "phone":
        if (!validateStringMin(form.phone, 10)) {
          errors.phone = "Mínimo de 10 dígitos";
        }
        if (!validateStringMax(form.phone, 20)) {
          errors.phone = "Mäximo de 20 dígitos";
        }
        break;
      case "subject":
        if (!validateStringMin(form.subject, 4)) {
          errors.subject = "Mínimo de 4 caracteres";
        }
        if (!validateStringMax(form.subject, 20)) {
          errors.subject = "Mäximo de 20 caracteres";
        }
        break;
      case "text":
        if (!validateStringMin(form.text, 10)) {
          errors.text = "Mínimo de 10 caracteres";
        }
        if (!validateStringMax(form.text, 200)) {
          errors.text = "Mäximo de 200 caracteres";
        }
        break;
    }
  }

  function cleanField(field) {
    switch (field) {
      case "email":
        errors.email = "";

        break;
      case "name":
        errors.name = "";

        break;
      case "phone":
        errors.phone = "";

        break;
      case "subject":
        errors.subject = "";

        break;
      case "text":
        errors.text = "";
        break;
    }
  }

  function validateFields() {
    validateField("email");
    validateField("name");
    validateField("phone");
    validateField("subject");
    validateField("text");
    return checkErrors();
  }

  function checkErrors() {
    let error = false;
    for (const [key, value] of Object.entries(errors)) {
      value.length > 0 ? (error = true) : (error = false);
    }
    return error;
  }

  async function postData(data) {
    let response = await fetch(`${API_URL}/api/send-email`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async function submitForm() {
    let hasErrors = validateFields();
    if (!hasErrors) {
      state.isWaiting = true;
      const data = {
        name: form.name,
        phone: form.phone,
        email: form.email,
        subject: form.subject,
        text: form.text,
      };
      const response = await postData(data);
      console.log(response);
      if (response.info) {
        state.isWaiting = false;
        state.success = true;
        setTimeout(() => {
          state.success = false;
        }, 2000);
      } else {
        state.isWaiting = false;
        state.error = true;
        setTimeout(() => {
          state.error = false;
        }, 2000);
      }
    }
  }
</script>
<style lang=""></style>
