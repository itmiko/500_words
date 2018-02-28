<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Коментарі</h1>
      <div class="row justify-content-md-center">
        <table class="table">
          <tbody>
          <tr>
            <td>User</td>
            <td>Результат</td>
            <td>100</td>
          </tr>
          </tbody>
        </table>
      </div>
      <form>
        <div class="form-group">
          <label for="comment-content"></label>
          <textarea class="form-control" id="comment-content" rows="3"
                    aria-describedby="comment-content-help" placeholder="Write a comment..."></textarea>
          <small id="comment-content-help" class="subtitle form-text text-danger is-invalid"></small>
        </div>
            <button type="button" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-secondary">Cancel</button>
      </form>
    </div>
  </div>
</template>


<script>

</script>

<style scoped>
  .table {
    margin: 50px 0;
  }
</style>
