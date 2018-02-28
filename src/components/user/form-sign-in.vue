<template>
  <form class="form sign-in text-center" >
    <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
    <div class="form-group required">
      <input type="email" class="form-control" aria-describedby="email-help" placeholder="Enter email">
      <small id="email-help" class="subtitle form-text text-danger is-invalid"></small>
    </div>
    <div class="form-group required">
      <input type="password" class="form-control" aria-describedby="password-help" placeholder="Password">
      <small id="password-help" class="subtitle form-text text-danger is-invalid"></small>
    </div>
    <div class="form-check mb-3">
      <input type="checkbox" class="form-check-input" id="remember">
      <label class="form-check-label" for="remember">Remember me</label>
    </div>
    <button type="submit" class="btn btn-lg btn-primary btn-block" >Sign in</button>
  </form>
</template>

<style lang="scss" scoped>

  .form.sign-in {
    width: 100%;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.7);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.7);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.7);
    max-width: 330px;
    padding: 25px;
    margin: 0 auto;

    .form-control {
      padding: 10px;
      font-size: 16px;
    }
  }
</style>

<script>

</script>
