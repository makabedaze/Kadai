//テキストボックスでエンター押されたら、下にそれを生成
//一括のチェックボタンもある
//生成されたものにはチェックとバツボタンがある

function AddTodo(code) {
    if (code == 13) {
        let tex = document.forms.main.textField;
        CreateTodoItem(tex.value);
        tex.value = " ";
    }
}

function CreateTodoItem(todoText) {
    //  var $sampleButton = document.createElement("BUTTON");
    //  $sampleButton.textContent = todoText;
    //  document.getElementById("sample").appendChild($sampleButton);

    // テーブル取得
    let table = document.getElementById("list");
    // 行を行末に追加
    let row = table.insertRow(0);
    // セルの挿入
    var cell1 = row.insertCell(-1);

    // ボタン用 HTML
    var button = '<input type = "text"  value = ' + todoText + '>';
    // セルの内容入力
    cell1.innerHTML = button;

    /*パターン２ 
    var sampleButton = document.createElement("BUTTON");
    sampleButton.textContent = todoText;
    cell1 = sampleButton;
    */

}