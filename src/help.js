const help = (prefix, copid, tanggal, jams, botname) => {
	return `「  *${botname}*  」
┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *⦿ Bot Prefix :* [all prefix]
│ *⦿ Owner :* FebzGanz
│ *⦿ Today :* ${tanggal}
│ *⦿ Jam :* ${jams}
│ *⦿ Ig:* https://bit.ly/3hqqQzZ
└┬────────────┈ ⳹
┌┤ 「  *Kasus Covid-19 Indonesia*  」
││➥ *Terinfeksi :* ${copid[0].kasus}
││➥ *Kematian :* ${copid[0].kematian}
││➥ *Sembuh :* ${copid[0].sembuh}
│└────────────┈ ⳹

+ _no spam, no telp, no vc_
+ _melanggar rul ? blok_

_*[+] - [ Grup Menu ]*_

. _*${prefix}setname_ <text>
. _*${prefix}setdesc_ <text>
. _*${prefix}setpp_ <img>
. _*${prefix}promote_ <tag>
. _*${prefix}demote_ <tag>
. _*${prefix}leave_
. _*${prefix}tagall_ 
. _*${prefix}hidetag_	
. _*${prefix}welcome_ <1/0>
. _*${prefix}listadmin_
. _*${prefix}antilink_ <1/0>
. _*${prefix}add_ <62×××>
. _*${prefix}kick_ <tag mem>
. _*${prefix}group_ buka/tutup
. _*${prefix}linkgc_

_*[+] - [ Maker ]*_

. _*${prefix}tomp3_
. _*${prefix}lirik_
. _*${prefix}sticker_
. _*${prefix}swm_ <author>|<pack>
. _*${prefix}tovideo_
. _*${prefix}toimg_
. _*${prefix}tts_ <Text>
. _*${prefix}nulis_ <Text>

_*[+] - [ Downloader ]*_

. _*${prefix}ytmp3_ <Url>
. _*${prefix}ytmp4_ <Url>
. _*${prefix}dafontdown_ <Url>
. _*${prefix}facebook_ <Url>
. _*${prefix}instagram_ <Url> <Options>
. _*${prefix}tiktok_ <Url>
. _*${prefix}soundcloud_ <Url>
. _*${prefix}pinterest_ <Query>
. _*${prefix}play_ <Query> 
. _*${prefix}joox_ <Query>

_*[+] - [ Search ]*_

. _*${prefix}ytsearch_ <Query>
. _*${prefix}ytdesc_ <Query>
. _*${prefix}brainly_ <Query>
. _*${prefix}herolist_
. _*${prefix}herodetail_ <Nama hero>
. _*${prefix}dafontsearch_ <Query>
. _*${prefix}google_ <Query>
. _*${prefix}wiki_ <Query>
. _*${prefix}quotes_ <Query>

_*[+] - [ Nolep Menu ]*_

. _*${prefix}whatanime_ <FotoAnim>
. _*${prefix}animelist_
. _*${prefix}randomhentong_

_*[+] - [ Info Command ]*_

Tanda Kurung < > Hiraukan Contoh :
_*${prefix}play fly away_

``Lapor Bug🐞: _*${prefix}bugreport_
``Request?    : _*${prefix}request_
``owner?      : _*${prefix}owner_
``donate?     : _*${prefix}donasi_

Have a Nice Day ❋ཻུ۪۪⸙`}

exports.help = help
