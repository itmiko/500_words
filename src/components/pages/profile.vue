<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Профайл
      </div>
      <div class="card-block">
        <form>
          <div class="form-group avatar">
            <img src="" class="rounded-circle float-left" alt="...">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Ім'я</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="button" class="btn btn-primary">Редагування</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .card-block {
    padding: 15px;
  }

  .avatar {
    background-color: #ccc;
    width: 150px;
    height: 150px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
</style>
