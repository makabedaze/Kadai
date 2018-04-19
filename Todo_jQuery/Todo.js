$("#textField").keypress(function (e) {
    let tex = document.getElementById("textField");
    if (e.which === 13 && tex.value !== " ") {
        CreateTodoItem(tex.value);
        tex.value = " ";
        UpdateListCount();
    }
});

//一番上のチェックボックスで一括操作
$('#masterCheck').click(function (e) {
    var c = $('input[type="checkbox"]');
    if ($('#masterCheck').prop('checked')) {
        c.prop('checked', true).change();
    } else {
        c.prop('checked', false).change();
    }
});

//ラジオボタンによってフィルタリング
$('input[type="radio"]').click(function () {
    var radioVal = $("input[name='all']:checked").val();
    if (radioVal == 0) {
        //全ての要素をshow
        $('.done').each(function (i, e) {
            $(this).parent().parent().show()
        });;
    }
    if (radioVal == 1) {
        //全ての要素をshow
        $('.done').each(function (i, e) {
            if ($(this).prop('checked')) {
                $(this).parent().parent().hide()
            } else {
                $(this).parent().parent().show()
            }
        });;
    }
    if (radioVal == 2) {
        $('.done').each(function (i, e) {
            if ($(this).prop('checked')) {
                $(this).parent().parent().show()
            } else {
                $(this).parent().parent().hide()
            }
        });;
    }
});

function CreateTodoItem(todoText) {
    // テーブル取得
    let table = document.getElementById("list");
    // 行を行末に追加
    let row = table.insertRow(1);
    // セルの挿入
    var cell1 = row.insertCell(-1);
    var cell2 = row.insertCell(-1);
    var cell3 = row.insertCell(-1);
    // ボタン用 HTML
    var checkBox = '<input class="done" type="checkbox" value="1" onchange="SwitchState(this)" />';
    var textBox = '<p>' + todoText + '</p>';
    var button = '<input type="button" value="×" onclick="DeleteRow(this)">';
    //TODO:セルの内容

    // セルの内容入力
    cell1.innerHTML = checkBox;
    cell2.innerHTML = textBox;
    cell3.innerHTML = button;
}

function DeleteRow(obj) {
    console.log("けすど");

    tr = obj.parentNode.parentNode;
    tr.parentNode.deleteRow(tr.sectionRowIndex);

    UpdateListCount();
}

function DeleteAllRow() {
    $('.done').each(function (i, e) {
        $(this).parent().parent().remove();
    });;
    UpdateListCount();
}

function SwitchState(obj) {
    var tr = obj.parentNode.parentNode;
    const text = list.rows[tr.sectionRowIndex].cells[1].firstChild;
    if (!obj.checked) {
        text.style.textDecoration = "none";
    } else {
        text.style.textDecoration = "line-through";
    }
}

function UpdateListCount() {
    const num = list.rows.length;
    document.getElementById("text").innerHTML = (num - 2) + " items left"
}