module.exports = function help() {
  console.log(`
🚀 gitku — Git yang Ramah Pemula

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DASAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gitku mulai                    mulai pakai git di folder ini
  gitku ambil <url>              download repo dari GitHub 
  gitku cek                      lihat file apa yang berubah
  gitku tandai semua             tandai semua file
  gitku tandai <file>            tandai file tertentu
  gitku simpan "pesan"           simpan perubahan
  gitku kirim                    kirim ke GitHub
  gitku kirim --paksa            kirim paksa (gunakan dengan hati hati!)
  gitku tarik                    ambil update repo terbaru
  gitku tarik --izinkan-beda     tarik dengan riwayat berbeda 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  BRANCH / CABANG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gitku cabang                   lihat semua cabang
  gitku cabang baru <nama>       buat cabang baru
  gitku cabang hapus             lihat & hapus branch yang sudah di-merge
  gitku cabang hapus <nama>      hapus langsung cabang tertentu
  gitku pindah <nama>            pindah ke cabang lain
  gitku gabung <nama>            gabung satu cabang ke cabang lain

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  UNDO & PERBAIKI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gitku batalkan                 undo 1 commit (perubahan disimpan)
  gitku batalkan <n>             undo n commit terakhir
  gitku batalkan --buang         undo + hapus perubahan
  gitku perbaiki                 ubah pesan commit terakhir
  gitku perbaiki --pesan "..."   langsung ganti pesan

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  VERSI / TAG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gitku versi                    lihat semua versi
  gitku versi baru <nama>        buat tag baru (contoh: v1.0.0)
  gitku versi hapus <nama>       hapus tag
  gitku versi kirim              kirim semua tag ke remote
  gitku rilis <versi>            tag + push + kirim (rilis lengkap)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DIFF & INFO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gitku beda                     lihat perubahan belum di-stage
  gitku beda --siap              lihat perubahan sudah di-stage
  gitku beda <file/cabang>       bandingkan file atau cabang
  gitku info                     statistik repo (commit, file, size)
  gitku siapa                    daftar kontributor

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  GITIGNORE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gitku abaikan <pattern>        tambah ke .gitignore
  gitku abaikan daftar           lihat isi .gitignore
  gitku abaikan template <nama>  template: node, python, java, etc.
  gitku abaikan hapus <pattern>  hapus dari .gitignore

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  VISUAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gitku peta                     pohon cabang (ASCII graph)
  gitku peta --detail            pohon dengan tanggal & author
  gitku pohon                    alias untuk peta

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LAINNYA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gitku riwayat                  git log --oneline --graph
  gitku reset                    buang semua perubahan (git restore .)
  gitku simpan-sementara         git stash
  gitku ambil-sementara          git stash pop
  gitku remote                   lihat remote yang terdaftar
  gitku remote ganti <url>       ganti URL origin
  gitku help                     tampilkan bantuan ini

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
};