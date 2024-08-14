<template>
  <div>
    <SiteNavbar />
    <PageHeader />
    <FeaturesList />
    <CustomerTestimonials />
    <BlogPreview />
    <CallToAction />
    <PageFooter />
  </div>
</template>

<script>
import SiteNavbar from '@/components/SiteNavbar.vue'
import PageHeader from '@/components/PageHeader.vue'
import FeaturesList from '@/components/FeaturesList.vue'
import CustomerTestimonials from '@/components/CustomerTestimonials.vue'
import BlogPreview from '@/components/BlogPreview.vue'
import CallToAction from '@/components/CallToAction.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'HomeView',
  components: {
    SiteNavbar,
    PageHeader,
    FeaturesList,
    CustomerTestimonials,
    BlogPreview,
    CallToAction,
    PageFooter
  }
}
</script>

<style scoped>
/* Agrega aquí estilos específicos de la vista Home */
</style>
