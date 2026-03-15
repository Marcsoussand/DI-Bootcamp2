function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const str1 = document.getElementById("sentence1").value;
    const str2 = document.getElementById("sentence2").value;
    const result = document.getElementById("result");
    if (isAnagram(str1, str2)) {
        result.textContent = "The two sentences are anagrams!";
    } else {
        result.textContent = "Sorry, the two sentences are not anagrams.";
    }
});


