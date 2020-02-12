<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="d-flex justify-content-center ">
      <div style="flex-basis: 450px">
        <h3>Twitter Clone</h3>
        <b-card
                class="bg-light shadow border">
          <div class="input-group mb-3">
            <input type="text" v-model="text" :maxlength="max" class="form-control" placeholder="Your Tweet" aria-label="Recipient's username" aria-describedby="addon-button">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary text-dark" type="button" @click="addTweet" :disabled="!text.length">Tweet</button>
            </div>
          </div>
          <div class="text-left" :class="{'text-danger': max - text.length === 0}"><small>Chars remaining: {{max - text.length}}</small></div>
        </b-card>
        <hr>
        <b-card v-for="(tweet, idx) in tweets" class="bg-light shadow border mb-4" :key="idx">
          {{tweet}}
        </b-card>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'twitter-clone',
  props: {
    msg: String
  },
  data: () => ({
    max: 80,
    text: '',
    tweets: []
  }),
  methods: {
    addTweet(){
      this.tweets.push(this.text)
      this.text = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input:focus{
    outline-style:none;
    box-shadow:none;
    border-color: #2c3e50;
  }
</style>
