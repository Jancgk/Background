$(document).ready(function(){
    var post_thumbnail_link = new Array();
    post_thumbnail_link[0] = "https://ws1.sinaimg.cn/large/006nOlwNgy1fkehkk8stnj31jk11t7cj.jpg";
    post_thumbnail_link[1] = "https://ws1.sinaimg.cn/large/006nOlwNgy1fkddz3td1ij31hc0xcgpg.jpg";
    post_thumbnail_link[2] = "https://ws1.sinaimg.cn/large/006nOlwNgy1fkddz3tiwoj31hc0xc0xl.jpg";
    post_thumbnail_link[3] = "https://ws1.sinaimg.cn/large/006nOlwNgy1fkehkjgpkuj31ch0v9wib.jpg";
    post_thumbnail_link[4] = "https://ws1.sinaimg.cn/large/006nOlwNgy1fkehkk7dkhj31kw0w0agg.jpg";
    post_thumbnail_link[5] = "https://ws1.sinaimg.cn/large/006nOlwNgy1fkddz4ynamj31ao0t6n3t.jpg";
    post_thumbnail_link[6] = "https://ws1.sinaimg.cn/large/006nOlwNgy1fkddz5uzy6j337b29enc4.jpg";
    post_thumbnail_link[7] = "https://ws2.sinaimg.cn/large/005ODKsIgw1f5ymp648s9j31hc0xc45e.jpg";
    post_thumbnail_link[8] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fatjlizgmhj31hc115n73.jpg";
    post_thumbnail_link[9] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fakz0ynpbej31hc0u00yd.jpg";
    post_thumbnail_link[10] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fam1v0e0v5j31hc0xlgu4.jpg";
    post_thumbnail_link[11] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fatjc2iv73j31hc0u0wn3.jpg";
    post_thumbnail_link[12] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fajzrhwuroj31hc0z042w.jpg";
    post_thumbnail_link[13] = "https://ws2.sinaimg.cn/large/005ODKsIgw1fam1w4nqpaj31hc0zkgtv.jpg";
    post_thumbnail_link[14] = "https://ws2.sinaimg.cn/large/005ODKsIgw1fak0hem7xaj31hc0xc7bd.jpg";
    post_thumbnail_link[15] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fajzusjp7jj31hc0u0do0.jpg";
    post_thumbnail_link[16] = "https://ws2.sinaimg.cn/large/005ODKsIgw1fan0kx4kibj31hc0tv0zq.jpg";
    post_thumbnail_link[17] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fatj0s2tcfj31hc0xcqa6.jpg";
    post_thumbnail_link[18] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fam26t879hj31hc0ydago.jpg";
    post_thumbnail_link[19] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fam25o1l8sj31hc0xb0xo.jpg";
    post_thumbnail_link[20] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fajzg272haj31hc0u0446.jpg";
    post_thumbnail_link[21] = "https://ws1.sinaimg.cn/large/005ODKsIgw1f5wxvttcmuj31hc0u0wlo.jpg";
    post_thumbnail_link[22] = "https://ws1.sinaimg.cn/large/005ODKsIgw1fatjjeeeb3j31hc0wz0yy.jpg";
    post_thumbnail_link[23] = "https://ws2.sinaimg.cn/large/005ODKsIgw1fatix8x9ppj31hc0xcae2.jpg";
    post_thumbnail_link[24] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fatiywi2l9j31hc0u0jx9.jpg";
    post_thumbnail_link[25] = "https://ws4.sinaimg.cn/large/005ODKsIgw1faoisckohoj31hc0u0tdx.jpg";
    post_thumbnail_link[26] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fam1uxvpimj31hc0u078r.jpg";
    post_thumbnail_link[27] = "https://ws4.sinaimg.cn/large/005ODKsIgw1faok661v7ej31hc0u0afy.jpg";
    post_thumbnail_link[28] = "https://ws2.sinaimg.cn/large/005ODKsIgw1f5ymn8mvblj31hc10hahc.jpg";
    post_thumbnail_link[29] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fajzls85syj31cq0yg78i.jpg";
    post_thumbnail_link[30] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fam24fhzo8j31hc12112e.jpg";
    post_thumbnail_link[31] = "https://ws1.sinaimg.cn/large/005ODKsIgw1faol0bwxk6j31hc0wwq8x.jpg";
    post_thumbnail_link[32] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fajzs5afwfj31hc0zuahi.jpg";
    post_thumbnail_link[33] = "https://ws2.sinaimg.cn/large/005ODKsIgw1faol3zqm79j31hc0vbqa6.jpg";
    post_thumbnail_link[34] = "https://ws4.sinaimg.cn/large/005ODKsIgw1faok8kjspsj31hc0xtafc.jpg";
    post_thumbnail_link[35] = "https://ws2.sinaimg.cn/large/005ODKsIgw1faoiz4646ej31hc0u0wjj.jpg";
    post_thumbnail_link[36] = "https://ws1.sinaimg.cn/large/005ODKsIgw1faoij3v2dzj31hc0zi7c8.jpg";
    post_thumbnail_link[37] = "https://ws1.sinaimg.cn/large/005ODKsIgw1faoixnzffjj31hc0u0q8o.jpg";
    post_thumbnail_link[38] = "https://ws2.sinaimg.cn/large/005ODKsIgw1fakztdame8j31hc11p78z.jpg";
    post_thumbnail_link[39] = "https://ws2.sinaimg.cn/large/005ODKsIgw1faoiz0zrhcj31hc0vun42.jpg";
    post_thumbnail_link[40] = "https://ws3.sinaimg.cn/large/005ODKsIgw1fatjarqpusj31hc0xudn5.jpg";
    post_thumbnail_link[41] = "https://ws2.sinaimg.cn/large/005ODKsIgw1fatj63jk7gj31hc0xcdny.jpg";
    post_thumbnail_link[42] = "https://ws2.sinaimg.cn/large/005ODKsIgw1fajznupbu8j31hc0xnagd.jpg";
    post_thumbnail_link[43] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fam2o6px7gj31hc12bafq.jpg";
    post_thumbnail_link[44] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fam21tgzt0j31hc0yrdn1.jpg";
    post_thumbnail_link[45] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fam24yxs4qj31hc0widmn.jpg";
    post_thumbnail_link[46] = "https://ws4.sinaimg.cn/large/005ODKsIgw1faok8gkzwfj31hc0u0n5p.jpg";
    post_thumbnail_link[47] = "https://ws4.sinaimg.cn/large/005ODKsIgw1faoisdbme2j31hc0u0grn.jpg";
    post_thumbnail_link[48] = "https://ws1.sinaimg.cn/large/005ODKsIgw1faokhtl1wqj31hc0u0jwf.jpg";
    post_thumbnail_link[49] = "https://ws2.sinaimg.cn/large/005ODKsIgw1fajzmkgstlj31hc11h0z5.jpg";
    post_thumbnail_link[50] = "https://ws4.sinaimg.cn/large/005ODKsIgw1fam2213sluj31hc11ido7.jpg";
    i = Math.floor(Math.random()*(Math.floor((post_thumbnail_link.length)/2)));
    j = Math.floor(Math.random()*(Math.floor((post_thumbnail_link.length)/2))+1);
    k = Math.floor(Math.random()*(Math.floor((post_thumbnail_link.length)/2))+1);
    l = Math.floor(Math.random()*(Math.floor((post_thumbnail_link.length)/2))+1);
    m = Math.floor(Math.random()*(Math.floor((post_thumbnail_link.length)/2))+1);
    n = Math.floor(Math.random()*(Math.floor((post_thumbnail_link.length)/2))+1);

    $(".li_img1").css('backgroundImage','url(' + post_thumbnail_link[i] + ')');
    $(".li_img2").css('backgroundImage','url(' + post_thumbnail_link[i+j] + ')');
    $(".li_img3").css('backgroundImage','url(' + post_thumbnail_link[i+k] + ')');
    $(".li_img4").css('backgroundImage','url(' + post_thumbnail_link[i+l] + ')');
    $(".li_img5").css('backgroundImage','url(' + post_thumbnail_link[i+m] + ')');
    $(".li_img6").css('backgroundImage','url(' + post_thumbnail_link[i+n] + ')');

});