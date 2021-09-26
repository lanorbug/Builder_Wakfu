import mysql from 'mysql';
import fetch from 'node-fetch';


// function testDonnees() {
//     fetch("https://wakfu.cdn.ankama.com/gamedata/1.72.1.181678/items.json")
//         .then(function(res) {
//         if (res.ok) {
//             return res.json();
//         }
//     })
//         .then(function(value) {
//             // for(let val of value){
//             //     console.log(value[1]["title"]["fr"]);
//             // }
//
//             return value;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });
//
// }

let res = await fetch("https://wakfu.cdn.ankama.com/gamedata/1.72.1.181678/items.json");

let itemsJson = await res.json();

 let con = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "mydb2"
 });


 con.connect(function(err) {
     if (err) throw err;
     console.log("Connected!");
     let sql = "INSERT INTO items (name, level, description, dommage_neutre, boost_pdv, deboost_pdv, " +
         "soin_neutre, gain_mtr_soin, boost_pa, old_deboost_pa, boost_pm, old_deboost_pm, deboost_pa, " +
         "deboost_pm, gain_res_dos, gain_res_elmtr, gain_res_feu, gain_res_eau, gain_res_terre, gain_res_air, " +
         "perte_res_terre, perte_res_feu, perte_res_eau, perte_res_elmtr, gain_mtr_elmtr, gain_mtr_feu, gain_mtr_terre, " +
         "gain_mtr_eau, gain_mtr_air, perte_mtr_elmtr, perte_mtr_feu, gain_mtr_crit, gain_cc, gain_po, perte_po, gain_pp, " +
         "gain_sagesse, perte_sagesse, perte_cc, gain_initiative, perte_initiative, gain_tacle, perte_tacle, gain_esquive, " +
         "perte_esquive, gain_volonte, gain_mtr_dos, perte_mtr_dos, gain_controle, boost_pw, deboost_pw, perte_pw, " +
         "gain_barda, gain_parade, perte_parade, gain_res_crit, gain_mtr_zone, gain_mtr_mono, gain_mtr_melee, gain_mtr_dist, " +
         "gain_mtr_berz, perte_mtr_crit, perte_mtr_dist, perte_mtr_berz, perte_res_crit, perte_res_dos, " +
         "gain_mtr_elmtr_variable, gain_res_elmtr_variable, dommage_lumiere, soin_lumiere) VALUES ?";
     // let values = [
     //     ['Amu Bouftou', '6', 'blablabla'],
     //     ['Dofusteuse', '200', 'blablablabla'],
     //     ['Cape du tofu', '16', 'blabla']
     // ];
     let value = [];

     for(let itemJson of itemsJson){

         // console.log(itemJson.title.fr);

         let name;
         if (!itemJson.hasOwnProperty('title') || !itemJson.title.hasOwnProperty('fr')){
             name = "";
         } else {
             name = itemJson.title.fr;
         }

         let level;
         if (!itemJson.hasOwnProperty('definition') ||
             !itemJson.definition.hasOwnProperty('item') ||
             !itemJson.definition.item.hasOwnProperty('level')){
             level = 0;
         } else {
             level = itemJson.definition.item['level'];
         }

         let description;
         if (!itemJson.hasOwnProperty('description') || !itemJson.description.hasOwnProperty('fr')){
             description = "";
         } else {
             description = itemJson.description.fr;
         }

         let isSublimation;
         if(itemJson.hasOwnProperty('definition') &&
             itemJson.definition.hasOwnProperty('item') &&
             itemJson.definition.item.hasOwnProperty('sublimationParameters')){
                isSublimation = true;
         } else {
             isSublimation = false;
         }
         // if (isSublimation){
         //     console.log(isSublimation);
         // }

         let isCostume = false;
         if (itemJson.hasOwnProperty('description')){
             if (itemJson.title.fr.includes('Costume') ||
                 itemJson.description.fr.includes('Costume') ||
                 itemJson.description.fr.includes('costume')){
                 isCostume = true;
             }
         }
         // if (isCostume){
         //     console.log(isCostume);
         // }





         if(level != 0 && name != "" && description != "" && !isSublimation && !isCostume) {

             let dommage_neutre = 0;
             let boost_pdv = 0;
             let deboost_pdv = 0;
             let soin_neutre = 0;
             let gain_mtr_soin = 0;
             let boost_pa = 0;
             let old_deboost_pa = 0;
             let boost_pm = 0;
             let old_deboost_pm = 0;
             let deboost_pa = 0;
             let deboost_pm = 0;
             let gain_res_dos = 0;
             let gain_res_elmtr = 0;
             let gain_res_feu = 0;
             let gain_res_eau = 0;
             let gain_res_terre = 0;
             let gain_res_air = 0;
             let perte_res_terre = 0;
             let perte_res_feu = 0;
             let perte_res_eau = 0;
             let perte_res_elmtr = 0;
             let gain_mtr_elmtr = 0;
             let gain_mtr_feu = 0;
             let gain_mtr_terre = 0;
             let gain_mtr_eau = 0;
             let gain_mtr_air = 0;
             let perte_mtr_elmtr = 0;
             let perte_mtr_feu = 0;
             let gain_mtr_crit = 0;
             let gain_cc = 0;
             let gain_po = 0;
             let perte_po = 0;
             let gain_pp = 0;
             let gain_sagesse = 0;
             let perte_sagesse = 0;
             let perte_cc = 0;
             let gain_initiative = 0;
             let perte_initiative = 0;
             let gain_tacle = 0;
             let perte_tacle = 0;
             let gain_esquive = 0;
             let perte_esquive = 0;
             let gain_volonte = 0;
             let gain_mtr_dos = 0;
             let perte_mtr_dos = 0;
             let gain_controle = 0;
             let boost_pw = 0;
             let deboost_pw = 0;
             let perte_pw = 0;
             let gain_barda = 0;
             let gain_parade = 0;
             let perte_parade = 0;
             let gain_res_crit = 0;
             let gain_mtr_zone = 0;
             let gain_mtr_mono = 0;
             let gain_mtr_melee = 0;
             let gain_mtr_dist = 0;
             let gain_mtr_berz = 0;
             let perte_mtr_crit = 0;
             let perte_mtr_dist = 0;
             let perte_mtr_berz = 0;
             let perte_res_crit = 0;
             let perte_res_dos = 0;
             let gain_mtr_elmtr_variable = 0;
             let gain_res_elmtr_variable = 0;
             let dommage_lumiere = 0;
             let soin_lumiere = 0;

             if (itemJson.hasOwnProperty('definition') && itemJson['definition'].hasOwnProperty('equipEffects')){
                 console.log(name);

                 for (let carac of itemJson['definition']['equipEffects']){

                     switch (carac.effect['definition'].actionId){
                         case 1 :
                             dommage_neutre = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                             break;
                         case 20 :
                             boost_pdv = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                             break;
                         case 21 :
                             deboost_pdv = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                             break;
                        case 24 :
                            soin_neutre = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 26 :
                            gain_mtr_soin = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 31 :
                            boost_pa = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 32 :
                            old_deboost_pa = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 41 :
                            boost_pm = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 42 :
                            old_deboost_pm = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 56 :
                            deboost_pa = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 57 :
                            deboost_pm = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 71 :
                            gain_res_dos = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 80 :
                            gain_res_elmtr = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 82 :
                            gain_res_feu = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 83 :
                            gain_res_eau = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 84 :
                            gain_res_terre = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 85 :
                            gain_res_air = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 96 :
                            perte_res_terre = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 97 :
                            perte_res_feu = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 98 :
                            perte_res_eau = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 100 :
                            perte_res_elmtr = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 120 :
                            gain_mtr_elmtr = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 122 :
                            gain_mtr_feu = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 123 :
                            gain_mtr_terre = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 124 :
                            gain_mtr_eau = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 125 :
                            gain_mtr_air = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 130 :
                            perte_mtr_elmtr = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 132 :
                            perte_mtr_feu = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 149 :
                            gain_mtr_crit = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 150 :
                            gain_cc = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 160 :
                            gain_po = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 161 :
                            perte_po = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 162 :
                            gain_pp = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 166 :
                            gain_sagesse = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 167 :
                            perte_sagesse = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 168 :
                            perte_cc = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 171 :
                            gain_initiative = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 172 :
                            perte_initiative = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 173 :
                            gain_tacle = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 174 :
                            perte_tacle = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 175 :
                            gain_esquive = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 176 :
                            perte_esquive = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 177 :
                            gain_volonte = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 180 :
                            gain_mtr_dos = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 181 :
                            perte_mtr_dos = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 184 :
                            gain_controle = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 191 :
                            boost_pw = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 192 :
                            deboost_pw = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 194 :
                            perte_pw = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 234 :
                            gain_barda = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 875 :
                            gain_parade = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 876 :
                            perte_parade = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 988 :
                            gain_res_crit = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1050 :
                            gain_mtr_zone = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1051 :
                            gain_mtr_mono = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1052 :
                            gain_mtr_melee = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1053 :
                            gain_mtr_dist = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1055 :
                            gain_mtr_berz = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1056 :
                            perte_mtr_crit = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1060 :
                            perte_mtr_dist = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1061 :
                            perte_mtr_berz = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1062 :
                            perte_res_crit = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1063 :
                            perte_res_dos = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1068 :
                            gain_mtr_elmtr_variable = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1069 :
                            gain_res_elmtr_variable = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1083 :
                            dommage_lumiere = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;
                        case 1084 :
                            soin_lumiere = carac.effect.definition.params[1] * level + carac.effect.definition.params[0];
                            break;

                     }
                 }
             }


             value = [[name, level, description, dommage_neutre, boost_pdv, deboost_pdv, soin_neutre,
                 gain_mtr_soin, boost_pa, old_deboost_pa, boost_pm, old_deboost_pm, deboost_pa, deboost_pm,
                 gain_res_dos, gain_res_elmtr, gain_res_feu, gain_res_eau, gain_res_terre, gain_res_air,
                 perte_res_terre, perte_res_feu, perte_res_eau, perte_res_elmtr, gain_mtr_elmtr, gain_mtr_feu,
                 gain_mtr_terre, gain_mtr_eau, gain_mtr_air, perte_mtr_elmtr, perte_mtr_feu, gain_mtr_crit,
                 gain_cc, gain_po, perte_po, gain_pp, gain_sagesse, perte_sagesse, perte_cc, gain_initiative,
                 perte_initiative, gain_tacle, perte_tacle, gain_esquive, perte_esquive, gain_volonte, gain_mtr_dos,
                 perte_mtr_dos, gain_controle, boost_pw, deboost_pw, perte_pw, gain_barda, gain_parade, perte_parade,
                 gain_res_crit, gain_mtr_zone, gain_mtr_mono, gain_mtr_melee, gain_mtr_dist, gain_mtr_berz, perte_mtr_crit,
                 perte_mtr_dist, perte_mtr_berz, perte_res_crit, perte_res_dos, gain_mtr_elmtr_variable,
                 gain_res_elmtr_variable, dommage_lumiere, soin_lumiere]];



             con.query(sql, [value], function (err, result) {
                 if (err) throw err;
                 console.log("Number of records inserted: " + result.affectedRows);
             });
         }

     }




 });



