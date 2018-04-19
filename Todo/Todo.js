//テキストボックスでエンター押されたら、下にそれを生成
//一括のチェックボタンもある
//生成されたものにはチェックとバツボタンがある

function AddTodo(code) {
    let tex = document.getElementById("textField");
    if (code === 13 && tex.value !== " ") {
        CreateTodoItem(tex.value);
        tex.value = " ";

        UpdateListCount();
    }
}

function CreateTodoItem(todoText) {
    //  var $sampleButton = document.createElement("BUTTON");
    //  $sampleButton.textContent = todoText;
    //  document.getElementById("sample").appendChild($sampleButton);


    // テーブル取得
    let table = document.getElementById("list");
    // 行を行末に追加
    let row = table.insertRow(1);
    // セルの挿入
    var cell1 = row.insertCell(-1);
    var cell2 = row.insertCell(-1);
    var cell3 = row.insertCell(-1);
    // ボタン用 HTML
    var checkBox = '<input name="flag" type="checkbox" value="1" onchange="SwitchState(this)" />';
    var textBox = '<p>' + todoText + '</p>';
    var button = '<input type="button" value="×" onclick="DeleteRow(this)">';
    //TODO:セルの内容

    // セルの内容入力
    cell1.innerHTML = checkBox;
    cell2.innerHTML = textBox;
    cell3.innerHTML = button;


    //TODO:要素を組み合わせたものを生成するにはどうするか
    //完成品を作って置いてそれをコピーするとか

    /*パターン２ 
    var sampleButton = document.createElement("BUTTON");
    sampleButton.textContent = todoText;
    cell1 = sampleButton;
    */
}

function DeleteRow(obj) {
    console.log("けすど");

    tr = obj.parentNode.parentNode;
    tr.parentNode.deleteRow(tr.sectionRowIndex);

    UpdateListCount();
}

function DeleteAllRow() {
    const table = document.getElementById("list");

    for (i = 1; i < table.rows.length; i++) {
        console.log(i);
        table.deleteRow(i);
    }

    UpdateListCount();
}

function SwitchState(obj) {
    var tr = obj.parentNode.parentNode;
    const text = list.rows[tr.sectionRowIndex].cells[1].firstChild;
    console.log(tr.sectionRowIndex)
    console.log(text);

    if (text.style.textDecoration === "line-through") {
        text.style.textDecoration = "none";
    } else {
        text.style.textDecoration = "line-through";
    }
}

function UpdateListCount() {
    const num = list.rows.length;
    document.getElementById("text").innerHTML = (num - 2) + " items left"
}