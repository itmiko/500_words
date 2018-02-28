<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Статистика</h1>
      <div class="row justify-content-md-center">
        <table class="table">
          <tbody>
          <tr>
            <td>Всього слів</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Вивчено слів</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Залишилося вивчити</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Помилок</td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="buttons">
        <button type="button" class="btn btn-outline-warning btn-lg btn-block">Продовжити вчити</button>
        <button type="button" class="btn btn-outline-warning btn-lg btn-block">Скинути статистику</button>
        <button type="button" class="btn btn-outline-warning btn-lg btn-block">TOP-10</button>
      </div>
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
