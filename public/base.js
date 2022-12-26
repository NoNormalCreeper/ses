const $ = (...args) => { return document.querySelector(...args) };

var qgroups = [];

function addQGroup() {
  let qgroup = {
    start: Number.parseInt($('#qg-start').value),
    end: Number.parseInt($('#qg-end').value),
    type: Number.parseInt($('#qg-type').value)
  }
  let ans = $('#qg-answer').value;
  if (ans != '') {
    switch (qgroup.type) {
      case 0:
      case 1:
      case 2:
      case 3:
        ans = ans.toUpperCase().charCodeAt(0) - 65;
        if (ans < 0 || ans > 5 || isNaN(ans)) {
          alert('正确答案输入有误，请检查您的输入');
          return;
        }
        break;
      case 4:
        ans = Number.parseInt(ans);
        if (ans < 0 || ans > 1 || isNaN(ans)) {
          alert('正确答案输入有误，请检查您的输入');
          return;
        }
    }
  } else {
    ans = null;
  }
  qgroup.answer = ans;
  if (isNaN(qgroup.start) || isNaN(qgroup.end) || qgroup.start > qgroup.end || qgroup.start < 0) {
    alert('题号输入有误，请检查您的输入');
    return;
  }
  qgroups.push(qgroup);
  renderQGroup();
}

function renderQGroup() {
  // 还是React好啊...
  $('#qg').innerHTML = '';
  qgroups.forEach((qgroup, index) => {
    let qgroupItemElement = document.createElement('div');
    qgroupItemElement.className = 'create-qgroup-item';
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');
    span1.innerText = `${qgroup.start}-${qgroup.end}`;
    span2.innerText = $('#qg-type').children[qgroup.type].innerText;
    span3.innerText = '删除';
    span3.className = 'create-qgroup-item-delete';
    span3.addEventListener('click', () => {
      qgroups = qgroups.filter((_, i) => { return index != i });
      renderQGroup();
    })
    qgroupItemElement.append(span1, span2, span3);
    $('#qg').appendChild(qgroupItemElement);
  })
}

function submit() {

}