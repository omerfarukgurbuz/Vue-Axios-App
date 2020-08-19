<template>
  <div class="container pt-5">
    <h3>Add text</h3>
    <hr>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Author</label>
        <input v-model="post.author" type="text" class="form-control" placeholder="Enter author name...">
      </div>
      <div class="form-group">
        <label>Title</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Enter author title...">
      </div>
      <div class="form-group">
        <label>Image Link</label>
        <input v-model="post.thumbnail" type="text" class="form-control" placeholder="Enter text image link...">
      </div>
      <div class="form-group">
        <label>Preview Text</label>
        <input v-model="post.previewText" type="text" class="form-control" placeholder="Enter preview text..">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea v-model="post.content" cols="30" rows="5" class="form-control"></textarea>
      </div>
      <button @click="$router.push('/')" class="btn btn-danger">Cabcel</button>
      <button type="submit" class="btn btn-info">Save</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data(){
      return {
        post : {
          author : "",
          content : "",
          previewText : "",
          thumbnail : "",
          title : "",
          updatedDate : ""
        }
      }
    },
    methods : {

      /*::::::::::::::::| Axios post |::::::::::::::::*/
      onSubmit(){
        axios.post("/post.json", {...this.post, updatedDate: new Date() })
        .then(response => {
          console.log(response);
          this.post = {};
        })
      }
    }
  }
</script>
