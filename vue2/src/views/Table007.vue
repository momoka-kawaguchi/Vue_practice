<template>
  <div id="app">
    <table align="center">
      <thead>
        <tr>
          <th>ライダー</th>
          <th>俳優</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>仮面ライダー1号</td>
          <td>藤岡弘</td>
        </tr>
        <tr>
          <td>仮面ライダー2号</td>
          <td>佐々木剛</td>
        </tr>
        <tr>
          <td>仮面ライダーV3</td>
          <td>宮内洋</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  /* 隣り合ったテーブルセルの間隔を指定 */
  border-collapse: collapse;
}
table th,
table td {
  /*実線 1px 黒*/
  border: solid 1px black;
}
</style>
