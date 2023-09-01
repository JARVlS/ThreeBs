<template>
  <div class="home_section">
    <h1 class="headline section_headline">Concept and Vision</h1>
    <p class="text_big">
      At "ThreeBs," we believe that less is more when it comes to
      self-expression. Our platform is all about distilling your essence into
      three powerful images. No overwhelming feeds, just the three most
      important things that define you, your lifestyle, and your perspective.
      We're here to provide a space where quality speaks louder than quantity,
      where every image becomes a story, and where you can express yourself in a
      way that's uniquely you.
    </p>
  </div>
  <div class="home_section">
    <h1 class="headline section_headline">Who It's for</h1>
    <p class="text_big">
      "ThreeBs" welcomes individuals from all walks of life who appreciate
      meaningful self-expression. Whether you're an artist seeking a platform to
      showcase your creativity, a professional aiming to connect with peers, or
      simply someone who values quality over quantity, our platform is tailored
      to you. If you're looking to share your story in a focused and impactful
      way, "ThreeBs" provides a canvas for you to display your essence,
      lifestyle, and unique perspective.
    </p>
  </div>
  <div class="home_section">
    <h1 class="headline section_headline">How it works</h1>
    <p class="text_big">
      Using "ThreeBs" is quite simple. First, sign up and create your
      profile. Then, carefully choose three images that represent you best –
      your personality, lifestyle, and outlook. Once uploaded, your images
      become the window into your world. Engage with others, explore the diverse
      array of profiles, and find connections beyond the superficial. With
      "ThreeBs," sharing your story is elegant, concise, and remarkably
      impactful.
    </p>
  </div>
  <nuxt-link to="/login">Login</nuxt-link>
</template>

<script></script>
<style scoped>
.home_section {
  padding: 1.5rem 2rem;
  width: 80%;
  margin-inline: auto;
  text-align: center;
  box-shadow: 0 0 12px var(--color-shadows);
  /* border: 1px solid var(--color-text); */
  border-radius: 10px;
  margin-bottom: 3rem;
}
.section_headline {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
</style>
