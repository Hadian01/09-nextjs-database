Nama : Hadian Nelvi
Kelas : TI-3C
Praktikum 9

Praktikum 1

soal 1
![gambar](img/1.jpeg)
![gambar](img/2.jpeg)

Mengikuti step yang ada di praktikum saya berhasil mendeploy project 09-nextjs-database

soal 2
![gambar](img/4.png)

![gambar](img/3.png)

Dari step yang sudah saya lakukan saya sudah dapat melakukan pembuatan basisdata Postgress dari sahboar varcel. saya juga berhasil dalam mengkonvigurasi lokal .env serta saya juga mengetahui cara instalasi SDK 

soal 3
![gambar](img/5.png)
melakukan seed ke database dengan menambahkan "seed": "node -r dotnv/config ./src/seeder/seed.js"

Soal 4
![gambar](img/6.jpeg)
Hasil dari Query, nampak berhasil dan berarti seeding telah berhasil dilakukan

![gambar](img/7.png)
query lain yang saya lakukan sama ,namun data yang ditampilkan adalah dari kolom customers.name, invoices.amount, invoices.status, dan invoices.date yang memiliki customers.name Lee Robinson.

Soal 5
![gambar](img/8.png)
jadi di percobaan kali ini saya mencoba mengisi folder atom di dalam componts dan saya mengisi komponen molecules dengan 3 file yang berbeda . setelah semua kode saya inputkan dan semua step telah dilakukan saya perlu ngepush projectnya ke git dan nanti akan otomatis kebaca di varcelnya dan berubah menjadi bentuk diatas

ini merupakan link aplikasi nya: https://09-nextjs-database-rose.vercel.app/

Soal 6
![gambar](img/9.png)
Data yang diperoleh dari revenueFetch diolah untuk ditampilkan dalam laman ReactJS, dengan dimulai dari mengekstrak data untuk sumbu X dan Y. Selanjutnya data revenue dikonversi ke format data map, dan terakhir adalah menampilkan data dari map revenue tersebut.

soal 7
![gambar](img/10.png)
Dengan mengakses model query untuk memperoleh 5 data terbaru pada function fetchLatestInvoices, limitasi dilakukan dengan menambahkan LIMIT 5 pada query data. Data disimpan pada latestInvoices yang selanjutnya di ekstrak ke map dan ditampilkan pada laman.

Praktikummm
Soal 1
![gambar](img/12.png)
![gambar](img/11.png)
Mengganti Card menjadi CardWrapper pada page.tsx

soal 2
Pada function fetchCardData, query bertujuan untuk mengambil total banyak data pada invoices dan customers, serta total banyak data untuk invoices dengan status paid dan pending. Dari hasil query tersebut datanya diekstrak menjadi data number yang selanjutnya 4 data tersebut akan direturn.