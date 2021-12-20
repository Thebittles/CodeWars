function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text; 
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0; console.log("assignment j",j)
    for (let i = 1; i < ans.length; i += 2) {
      console.log("J in loop", j, "i in loop", i)
      ans[i] = encryptedText[j++];

    }
    for (let i = 0; i < ans.length; i += 2) {
      console.log("J in second loop", j, "i in second loop", i)
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}


 console.log(decrypt("1350246", 1))