chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // id="tab10"のdivタグ内でdata-schkbn属性を持つ<td>タグを赤くする
      const targetDiv = document.querySelector('#tab10');
      if (targetDiv) {
        // data-schkbn属性を持つ<td>タグを取得して赤くする
        targetDiv.querySelectorAll('td[data-schkbn]').forEach(td => {
          td.style.backgroundColor = 'red';
        });
      } else {
        console.error('id="tab10" の要素が見つかりません');
      }
    },
  });
});
