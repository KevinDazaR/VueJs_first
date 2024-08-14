<template>
    <section class="py-5 bg-light">
      <div class="container px-5 my-5">
        <div class="text-center">
          <h2 class="fw-bolder">Our team</h2>
          <p class="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
        </div>
        <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
          <div class="col mb-5 mb-5 mb-xl-0" v-for="member in teamMembers" :key="member.name">
            <div class="text-center">
              <img class="img-fluid rounded-circle mb-4 px-4" :src="member.imgSrc" alt="...">
              <h5 class="fw-bolder">{{ member.name }}</h5>
              <div class="fst-italic text-muted">{{ member.position }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TeamSection',
    data() {
      return {
        teamMembers: [
          { name: 'Ibbie Eckart', position: 'Founder & CEO', imgSrc: 'https://dummyimage.com/150x150/ced4da/6c757d' },
          { name: 'Arden Vasek', position: 'CFO', imgSrc: 'https://dummyimage.com/150x150/ced4da/6c757d' },
          { name: 'Toribio Nerthus', position: 'Operations Manager', imgSrc: 'https://dummyimage.com/150x150/ced4da/6c757d' },
          { name: 'Malvina Cilla', position: 'CTO', imgSrc: 'https://dummyimage.com/150x150/ced4da/6c757d' }
        ]
      }
    }
  }
  </script>
  