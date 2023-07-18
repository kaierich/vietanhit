<script setup>
const title = ref('My Blog Viet Anh IT')
const description = ref('Chỉ là 1 nơi để lưu trữ thôi. Tôi thích làm trang web thú vị và sáng tạo. Cảm thấy tự do để có một cái nhìn xung quanh trang web cá nhân của tôi.')

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>


<template>
  <div>
    <NuxtLayout>
      <Header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

