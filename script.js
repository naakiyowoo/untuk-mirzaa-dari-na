const message = `Mirza selamat tahun baru yaa! Semoga di tahun ini mirzaa banyak bahagianya. Naaa tuh sukaa banget merasa jengkel dan gemes ke mirza. Naa minta maaf yaa kalau memang na buat mirza benar-benar sakit hati. Na selama ini selalu denial sama hubungan kita, karna na takut. Ada hal yang ga bisa na jelasin. Tapi selama ini na selalu curhat tentang mirza ke temen-temen na even ke faqih, na selalu cerita kalau tindakan mirza kadang buat na sedih, tapi na ga pernah bisa terus terang ke mirza. Na cuma mau bilang biar mirza tuuh tau kalau na sampai sekarang masih sayang sama mirza. Kamuu tuu berharga dan kamu salah satu momen yang ga akan pernah na lupa, i hope in another life kita ga akan saling jatuh cinta yaa biar kita ga sama-sama tersakiti dan kamu menemukan perempuan yang sayaaaannnggg bangeettt sama kamu daripada aku, jangan sedih-sedih yaa, mirzaa...`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 20);
      }
    }

    typeWriter();
  }, 500);
}