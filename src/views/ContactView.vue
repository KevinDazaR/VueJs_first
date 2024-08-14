<template>
    <div>
      <SiteNavbar />
      <ContactForm />
      <!-- <ContactItems /> -->
      <PageFooter />
    </div>
  </template>
  
  <script>
  import SiteNavbar from '../components/SiteNavbar.vue'
  import ContactForm from '../components/ContactForm.vue'
  import PageFooter from '../components/PageFooter.vue'
//   import ContactItems from '../components/ContactItems.vue'
  
  export default {
    name: 'ContactView',
    components: {
      SiteNavbar,   
      ContactForm,
      PageFooter
    }
  }
  </script>
  