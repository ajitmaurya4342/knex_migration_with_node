const { response } = require("express");
const CheckValidation = require("@/lib/CheckValidation").checkValidation;
const pagination = require("@/lib/pagination").pagination;
var request = require('request');
// const cheerio = require('cherio')


module.exports.ImageLogoQuestion = async (req, res) => {

  var newArray = [
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nike.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nike.png",
      "options": "Nike,Nike,Nike,Nike",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_samsung.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_samsung.png",
      "options": "Samsung,Samsung,Samsung,Samsung",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_youtube.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_youtube.png",
      "options": "Youtube,Youtube,Youtube,Youtube",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_audi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_audi.png",
      "options": "Audi,Audi,Audi,Audi",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bmw.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bmw.png",
      "options": "Bmw,Bmw,Bmw,Bmw",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_windows.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_windows.png",
      "options": "Windows,Windows,Windows,Windows",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mcdonalds.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mcdonalds.png",
      "options": "Mcdonalds,Mcdonalds,Mcdonalds,Mcdonalds",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_unicef.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_unicef.png",
      "options": "Unicef,Unicef,Unicef,Unicef",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_redbull.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_redbull.png",
      "options": "Redbull,Redbull,Redbull,Redbull",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_evian.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_evian.png",
      "options": "Evian,Evian,Evian,Evian",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_firefox.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_firefox.png",
      "options": "Firefox,Firefox,Firefox,Firefox",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_facebook.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_facebook.png",
      "options": "Facebook,Facebook,Facebook,Facebook",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_europcar.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_europcar.png",
      "options": "Europcar,Europcar,Europcar,Europcar",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_emirates.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_emirates.png",
      "options": "Emirates,Emirates,Emirates,Emirates",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ebay.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ebay.png",
      "options": "Ebay,Ebay,Ebay,Ebay",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_roxy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_roxy.png",
      "options": "Roxy,Roxy,Roxy,Roxy",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_esso.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_esso.png",
      "options": "Esso,Esso,Esso,Esso",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rayban.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rayban.png",
      "options": "Rayban,Rayban,Rayban,Rayban",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_eurosport.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_eurosport.png",
      "options": "Eurosport,Eurosport,Eurosport,Eurosport",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_quiksilver.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_quiksilver.png",
      "options": "Quiksilver,Quiksilver,Quiksilver,Quiksilver",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_postit.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_postit.png",
      "options": "Postit,Postit,Postit,Postit",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_granini.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_granini.png",
      "options": "Granini,Granini,Granini,Granini",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_groupon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_groupon.png",
      "options": "Groupon,Groupon,Groupon,Groupon",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_haagendazs.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_haagendazs.png",
      "options": "Haagendazs,Haagendazs,Haagendazs,Haagendazs",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playstation.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playstation.png",
      "options": "Playstation,Playstation,Playstation,Playstation",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gopro.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gopro.png",
      "options": "Gopro,Gopro,Gopro,Gopro",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_prada.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_prada.png",
      "options": "Prada,Prada,Prada,Prada",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gamecube.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gamecube.png",
      "options": "Gamecube,Gamecube,Gamecube,Gamecube",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_duplo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_duplo.png",
      "options": "Duplo,Duplo,Duplo,Duplo",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_garnier.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_garnier.png",
      "options": "Garnier,Garnier,Garnier,Garnier",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_puma.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_puma.png",
      "options": "Puma,Puma,Puma,Puma",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pringles.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pringles.png",
      "options": "Pringles,Pringles,Pringles,Pringles",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_friskies.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_friskies.png",
      "options": "Friskies,Friskies,Friskies,Friskies",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_schweppes.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_schweppes.png",
      "options": "Schweppes,Schweppes,Schweppes,Schweppes",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chupachups.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chupachups.png",
      "options": "Chupachups,Chupachups,Chupachups,Chupachups",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_subway.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_subway.png",
      "options": "Subway,Subway,Subway,Subway",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_starbucks.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_starbucks.png",
      "options": "Starbucks,Starbucks,Starbucks,Starbucks",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cocacola.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cocacola.png",
      "options": "Cocacola,Cocacola,Cocacola,Cocacola",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_colgate.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_colgate.png",
      "options": "Colgate,Colgate,Colgate,Colgate",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_swatch.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_swatch.png",
      "options": "Swatch,Swatch,Swatch,Swatch",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tmobile.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tmobile.png",
      "options": "Tmobile,Tmobile,Tmobile,Tmobile",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_carrefour.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_carrefour.png",
      "options": "Carrefour,Carrefour,Carrefour,Carrefour",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_carlsberg.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_carlsberg.png",
      "options": "Carlsberg,Carlsberg,Carlsberg,Carlsberg",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cartier.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cartier.png",
      "options": "Cartier,Cartier,Cartier,Cartier",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_casio.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_casio.png",
      "options": "Casio,Casio,Casio,Casio",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chanel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chanel.png",
      "options": "Chanel,Chanel,Chanel,Chanel",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sprite.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sprite.png",
      "options": "Sprite,Sprite,Sprite,Sprite",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spotify.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spotify.png",
      "options": "Spotify,Spotify,Spotify,Spotify",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_diesel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_diesel.png",
      "options": "Diesel,Diesel,Diesel,Diesel",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shell.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shell.png",
      "options": "Shell,Shell,Shell,Shell",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dior.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dior.png",
      "options": "Dior,Dior,Dior,Dior",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_heineken.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_heineken.png",
      "options": "Heineken,Heineken,Heineken,Heineken",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dreamworks.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dreamworks.png",
      "options": "Dreamworks,Dreamworks,Dreamworks,Dreamworks",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dhl.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dhl.png",
      "options": "Dhl,Dhl,Dhl,Dhl",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_danone.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_danone.png",
      "options": "Danone,Danone,Danone,Danone",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_smirnoff.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_smirnoff.png",
      "options": "Smirnoff,Smirnoff,Smirnoff,Smirnoff",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_crayola.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_crayola.png",
      "options": "Crayola,Crayola,Crayola,Crayola",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_crocs.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_crocs.png",
      "options": "Crocs,Crocs,Crocs,Crocs",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_crunch.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_crunch.png",
      "options": "Crunch,Crunch,Crunch,Crunch",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_skoda.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_skoda.png",
      "options": "Skoda,Skoda,Skoda,Skoda",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_duff.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_duff.png",
      "options": "Duff,Duff,Duff,Duff",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_henkel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_henkel.png",
      "options": "Henkel,Henkel,Henkel,Henkel",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nintendo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nintendo.png",
      "options": "Nintendo,Nintendo,Nintendo,Nintendo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lg.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lg.png",
      "options": "Lg,Lg,Lg,Lg",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lindt.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lindt.png",
      "options": "Lindt,Lindt,Lindt,Lindt",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_logitech.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_logitech.png",
      "options": "Logitech,Logitech,Logitech,Logitech",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lotto.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lotto.png",
      "options": "Lotto,Lotto,Lotto,Lotto",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_levis.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_levis.png",
      "options": "Levis,Levis,Levis,Levis",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lego.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lego.png",
      "options": "Lego,Lego,Lego,Lego",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lacoste.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lacoste.png",
      "options": "Lacoste,Lacoste,Lacoste,Lacoste",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_opel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_opel.png",
      "options": "Opel,Opel,Opel,Opel",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lancome.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lancome.png",
      "options": "Lancome,Lancome,Lancome,Lancome",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nutella.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nutella.png",
      "options": "Nutella,Nutella,Nutella,Nutella",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_novotel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_novotel.png",
      "options": "Novotel,Novotel,Novotel,Novotel",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_magnum.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_magnum.png",
      "options": "Magnum,Magnum,Magnum,Magnum",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nespresso.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nespresso.png",
      "options": "Nespresso,Nespresso,Nespresso,Nespresso",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_milka.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_milka.png",
      "options": "Milka,Milka,Milka,Milka",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_michelin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_michelin.png",
      "options": "Michelin,Michelin,Michelin,Michelin",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mini.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mini.png",
      "options": "Mini,Mini,Mini,Mini",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_minutemaid.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_minutemaid.png",
      "options": "Minutemaid,Minutemaid,Minutemaid,Minutemaid",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_monopoly.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_monopoly.png",
      "options": "Monopoly,Monopoly,Monopoly,Monopoly",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mtv.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mtv.png",
      "options": "Mtv,Mtv,Mtv,Mtv",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_meccano.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_meccano.png",
      "options": "Meccano,Meccano,Meccano,Meccano",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_marlboro.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_marlboro.png",
      "options": "Marlboro,Marlboro,Marlboro,Marlboro",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_malibu.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_malibu.png",
      "options": "Malibu,Malibu,Malibu,Malibu",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_martini.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_martini.png",
      "options": "Martini,Martini,Martini,Martini",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_marvel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_marvel.png",
      "options": "Marvel,Marvel,Marvel,Marvel",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mazda.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mazda.png",
      "options": "Mazda,Mazda,Mazda,Mazda",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kodak.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kodak.png",
      "options": "Kodak,Kodak,Kodak,Kodak",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oralb.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oralb.png",
      "options": "Oralb,Oralb,Oralb,Oralb",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hp.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hp.png",
      "options": "Hp,Hp,Hp,Hp",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hotwheels.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hotwheels.png",
      "options": "Hotwheels,Hotwheels,Hotwheels,Hotwheels",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hsbc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hsbc.png",
      "options": "Hsbc,Hsbc,Hsbc,Hsbc",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_huawei.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_huawei.png",
      "options": "Huawei,Huawei,Huawei,Huawei",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ibis.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ibis.png",
      "options": "Ibis,Ibis,Ibis,Ibis",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pixar.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pixar.png",
      "options": "Pixar,Pixar,Pixar,Pixar",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playdoh.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playdoh.png",
      "options": "Playdoh,Playdoh,Playdoh,Playdoh",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_canon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_canon.png",
      "options": "Canon,Canon,Canon,Canon",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hellokitty.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hellokitty.png",
      "options": "Hellokitty,Hellokitty,Hellokitty,Hellokitty",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playmobil.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playmobil.png",
      "options": "Playmobil,Playmobil,Playmobil,Playmobil",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playboy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playboy.png",
      "options": "Playboy,Playboy,Playboy,Playboy",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hertz.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hertz.png",
      "options": "Hertz,Hertz,Hertz,Hertz",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ibm.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ibm.png",
      "options": "Ibm,Ibm,Ibm,Ibm",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ikea.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ikea.png",
      "options": "Ikea,Ikea,Ikea,Ikea",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kfc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kfc.png",
      "options": "Kfc,Kfc,Kfc,Kfc",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oreo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oreo.png",
      "options": "Oreo,Oreo,Oreo,Oreo",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kia.png",
      "options": "Kia,Kia,Kia,Kia",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_orange.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_orange.png",
      "options": "Orange,Orange,Orange,Orange",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kleenex.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kleenex.png",
      "options": "Kleenex,Kleenex,Kleenex,Kleenex",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kelloggs.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kelloggs.png",
      "options": "Kelloggs,Kelloggs,Kelloggs,Kelloggs",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_java.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_java.png",
      "options": "Java,Java,Java,Java",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_perrier.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_perrier.png",
      "options": "Perrier,Perrier,Perrier,Perrier",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_intel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_intel.png",
      "options": "Intel,Intel,Intel,Intel",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_interflora.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_interflora.png",
      "options": "Interflora,Interflora,Interflora,Interflora",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pepsi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pepsi.png",
      "options": "Pepsi,Pepsi,Pepsi,Pepsi",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_heinz.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_heinz.png",
      "options": "Heinz,Heinz,Heinz,Heinz",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_easyjet.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_easyjet.png",
      "options": "Easyjet,Easyjet,Easyjet,Easyjet",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_veet.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_veet.png",
      "options": "Veet,Veet,Veet,Veet",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_barbie.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_barbie.png",
      "options": "Barbie,Barbie,Barbie,Barbie",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vaio.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vaio.png",
      "options": "Vaio,Vaio,Vaio,Vaio",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ups.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ups.png",
      "options": "Ups,Ups,Ups,Ups",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_axe.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_axe.png",
      "options": "Axe,Axe,Axe,Axe",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_axa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_axa.png",
      "options": "Axa,Axa,Axa,Axa",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vodafone.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vodafone.png",
      "options": "Vodafone,Vodafone,Vodafone,Vodafone",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_visa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_visa.png",
      "options": "Visa,Visa,Visa,Visa",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_virgin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_virgin.png",
      "options": "Virgin,Virgin,Virgin,Virgin",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bic.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bic.png",
      "options": "Bic,Bic,Bic,Bic",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bing.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bing.png",
      "options": "Bing,Bing,Bing,Bing",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bose.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bose.png",
      "options": "Bose,Bose,Bose,Bose",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bp.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bp.png",
      "options": "Bp,Bp,Bp,Bp",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_toysrus.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_toysrus.png",
      "options": "Toysrus,Toysrus,Toysrus,Toysrus",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tropicana.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tropicana.png",
      "options": "Tropicana,Tropicana,Tropicana,Tropicana",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_twitter.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_twitter.png",
      "options": "Twitter,Twitter,Twitter,Twitter",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_blackberry.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_blackberry.png",
      "options": "Blackberry,Blackberry,Blackberry,Blackberry",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bluray.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bluray.png",
      "options": "Bluray,Bluray,Bluray,Bluray",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_twix.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_twix.png",
      "options": "Twix,Twix,Twix,Twix",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_atari.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_atari.png",
      "options": "Atari,Atari,Atari,Atari",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ariel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ariel.png",
      "options": "Ariel,Ariel,Ariel,Ariel",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yahoo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yahoo.png",
      "options": "Yahoo,Yahoo,Yahoo,Yahoo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_xbox.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_xbox.png",
      "options": "Xbox,Xbox,Xbox,Xbox",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wwf.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wwf.png",
      "options": "Wwf,Wwf,Wwf,Wwf",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_adidas.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_adidas.png",
      "options": "Adidas,Adidas,Adidas,Adidas",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_adecco.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_adecco.png",
      "options": "Adecco,Adecco,Adecco,Adecco",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zippo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zippo.png",
      "options": "Zippo,Zippo,Zippo,Zippo",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zara.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zara.png",
      "options": "Zara,Zara,Zara,Zara",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yoplait.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yoplait.png",
      "options": "Yoplait,Yoplait,Yoplait,Yoplait",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airwick.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airwick.png",
      "options": "Airwick,Airwick,Airwick,Airwick",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wilson.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wilson.png",
      "options": "Wilson,Wilson,Wilson,Wilson",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_whirlpool.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_whirlpool.png",
      "options": "Whirlpool,Whirlpool,Whirlpool,Whirlpool",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_warnerbros.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_warnerbros.png",
      "options": "Warnerbros,Warnerbros,Warnerbros,Warnerbros",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aol.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aol.png",
      "options": "Aol,Aol,Aol,Aol",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amazon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amazon.png",
      "options": "Amazon,Amazon,Amazon,Amazon",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_allianz.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_allianz.png",
      "options": "Allianz,Allianz,Allianz,Allianz",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wikipedia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wikipedia.png",
      "options": "Wikipedia,Wikipedia,Wikipedia,Wikipedia",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wii.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wii.png",
      "options": "Wii,Wii,Wii,Wii",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_whiskas.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_whiskas.png",
      "options": "Whiskas,Whiskas,Whiskas,Whiskas",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_toyota.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_toyota.png",
      "options": "Toyota,Toyota,Toyota,Toyota",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_barclays.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_barclays.png",
      "options": "Barclays,Barclays,Barclays,Barclays",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_burn.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_burn.png",
      "options": "Burn,Burn,Burn,Burn",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_toblerone.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_toblerone.png",
      "options": "Toblerone,Toblerone,Toblerone,Toblerone",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_total.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_total.png",
      "options": "Total,Total,Total,Total",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tomtom.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tomtom.png",
      "options": "Tomtom,Tomtom,Tomtom,Tomtom",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_burgerking.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_burgerking.png",
      "options": "Burgerking,Burgerking,Burgerking,Burgerking",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lucasarts.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lucasarts.png",
      "options": "Lucasarts,Lucasarts,Lucasarts,Lucasarts",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nickelodeon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nickelodeon.png",
      "options": "Nickelodeon,Nickelodeon,Nickelodeon,Nickelodeon",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_capcom.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_capcom.png",
      "options": "Capcom,Capcom,Capcom,Capcom",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ubisoft.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ubisoft.png",
      "options": "Ubisoft,Ubisoft,Ubisoft,Ubisoft",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_konami.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_konami.png",
      "options": "Konami,Konami,Konami,Konami",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cia.png",
      "options": "Cia,Cia,Cia,Cia",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bandai.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bandai.png",
      "options": "Bandai,Bandai,Bandai,Bandai",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bwin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bwin.png",
      "options": "Bwin,Bwin,Bwin,Bwin",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sephora.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sephora.png",
      "options": "Sephora,Sephora,Sephora,Sephora",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lexus.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lexus.png",
      "options": "Lexus,Lexus,Lexus,Lexus",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sega.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sega.png",
      "options": "Sega,Sega,Sega,Sega",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tippex.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tippex.png",
      "options": "Tippex,Tippex,Tippex,Tippex",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_knorr.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_knorr.png",
      "options": "Knorr,Knorr,Knorr,Knorr",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rolex.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rolex.png",
      "options": "Rolex,Rolex,Rolex,Rolex",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fifa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fifa.png",
      "options": "Fifa,Fifa,Fifa,Fifa",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ripcurl.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ripcurl.png",
      "options": "Ripcurl,Ripcurl,Ripcurl,Ripcurl",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ktm.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ktm.png",
      "options": "Ktm,Ktm,Ktm,Ktm",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amd.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amd.png",
      "options": "Amd,Amd,Amd,Amd",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bacardi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bacardi.png",
      "options": "Bacardi,Bacardi,Bacardi,Bacardi",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_klm.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_klm.png",
      "options": "Klm,Klm,Klm,Klm",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_repsol.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_repsol.png",
      "options": "Repsol,Repsol,Repsol,Repsol",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fisherman.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fisherman.png",
      "options": "Fisherman,Fisherman,Fisherman,Fisherman",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_royalcanin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_royalcanin.png",
      "options": "Royalcanin,Royalcanin,Royalcanin,Royalcanin",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dove.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dove.png",
      "options": "Dove,Dove,Dove,Dove",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pizzahut.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pizzahut.png",
      "options": "Pizzahut,Pizzahut,Pizzahut,Pizzahut",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_siemens.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_siemens.png",
      "options": "Siemens,Siemens,Siemens,Siemens",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vichy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vichy.png",
      "options": "Vichy,Vichy,Vichy,Vichy",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_versace.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_versace.png",
      "options": "Versace,Versace,Versace,Versace",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gulfair.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gulfair.png",
      "options": "Gulfair,Gulfair,Gulfair,Gulfair",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_actionman.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_actionman.png",
      "options": "Actionman,Actionman,Actionman,Actionman",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_arena.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_arena.png",
      "options": "Arena,Arena,Arena,Arena",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_guerlain.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_guerlain.png",
      "options": "Guerlain,Guerlain,Guerlain,Guerlain",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sony.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sony.png",
      "options": "Sony,Sony,Sony,Sony",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_smart.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_smart.png",
      "options": "Smart,Smart,Smart,Smart",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nasa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nasa.png",
      "options": "Nasa,Nasa,Nasa,Nasa",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fanta.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fanta.png",
      "options": "Fanta,Fanta,Fanta,Fanta",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wellsfargo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wellsfargo.png",
      "options": "Wellsfargo,Wellsfargo,Wellsfargo,Wellsfargo",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_orbit.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_orbit.png",
      "options": "Orbit,Orbit,Orbit,Orbit",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wella.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wella.png",
      "options": "Wella,Wella,Wella,Wella",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_whatsapp.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_whatsapp.png",
      "options": "Whatsapp,Whatsapp,Whatsapp,Whatsapp",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_orbea.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_orbea.png",
      "options": "Orbea,Orbea,Orbea,Orbea",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tagheuer.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tagheuer.png",
      "options": "Tagheuer,Tagheuer,Tagheuer,Tagheuer",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_westjet.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_westjet.png",
      "options": "Westjet,Westjet,Westjet,Westjet",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_volvo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_volvo.png",
      "options": "Volvo,Volvo,Volvo,Volvo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_photoshop.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_photoshop.png",
      "options": "Photoshop,Photoshop,Photoshop,Photoshop",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_teka.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_teka.png",
      "options": "Teka,Teka,Teka,Teka",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_volkswagen.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_volkswagen.png",
      "options": "Volkswagen,Volkswagen,Volkswagen,Volkswagen",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pioneer.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pioneer.png",
      "options": "Pioneer,Pioneer,Pioneer,Pioneer",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_volcom.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_volcom.png",
      "options": "Volcom,Volcom,Volcom,Volcom",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pilot.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pilot.png",
      "options": "Pilot,Pilot,Pilot,Pilot",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_picasa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_picasa.png",
      "options": "Picasa,Picasa,Picasa,Picasa",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_philips.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_philips.png",
      "options": "Philips,Philips,Philips,Philips",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oscarmayer.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oscarmayer.png",
      "options": "Oscarmayer,Oscarmayer,Oscarmayer,Oscarmayer",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_piaggio.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_piaggio.png",
      "options": "Piaggio,Piaggio,Piaggio,Piaggio",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tdk.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tdk.png",
      "options": "Tdk,Tdk,Tdk,Tdk",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pacorabanne.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pacorabanne.png",
      "options": "Pacorabanne,Pacorabanne,Pacorabanne,Pacorabanne",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_petrochina.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_petrochina.png",
      "options": "Petrochina,Petrochina,Petrochina,Petrochina",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_peace.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_peace.png",
      "options": "Peace,Peace,Peace,Peace",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_target.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_target.png",
      "options": "Target,Target,Target,Target",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pbs.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pbs.png",
      "options": "Pbs,Pbs,Pbs,Pbs",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_petronas.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_petronas.png",
      "options": "Petronas,Petronas,Petronas,Petronas",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pelikan.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pelikan.png",
      "options": "Pelikan,Pelikan,Pelikan,Pelikan",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pepejeans.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pepejeans.png",
      "options": "Pepejeans,Pepejeans,Pepejeans,Pepejeans",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vueling.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vueling.png",
      "options": "Vueling,Vueling,Vueling,Vueling",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_walkman.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_walkman.png",
      "options": "Walkman,Walkman,Walkman,Walkman",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pepsico.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pepsico.png",
      "options": "Pepsico,Pepsico,Pepsico,Pepsico",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_walmart.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_walmart.png",
      "options": "Walmart,Walmart,Walmart,Walmart",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_peugeot.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_peugeot.png",
      "options": "Peugeot,Peugeot,Peugeot,Peugeot",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_paypal.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_paypal.png",
      "options": "Paypal,Paypal,Paypal,Paypal",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_padi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_padi.png",
      "options": "Padi,Padi,Padi,Padi",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vtech.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vtech.png",
      "options": "Vtech,Vtech,Vtech,Vtech",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pacha.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pacha.png",
      "options": "Pacha,Pacha,Pacha,Pacha",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_otis.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_otis.png",
      "options": "Otis,Otis,Otis,Otis",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pallmall.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pallmall.png",
      "options": "Pallmall,Pallmall,Pallmall,Pallmall",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_panasonic.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_panasonic.png",
      "options": "Panasonic,Panasonic,Panasonic,Panasonic",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_papermate.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_papermate.png",
      "options": "Papermate,Papermate,Papermate,Papermate",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pantene.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pantene.png",
      "options": "Pantene,Pantene,Pantene,Pantene",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pfizer.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pfizer.png",
      "options": "Pfizer,Pfizer,Pfizer,Pfizer",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_panda.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_panda.png",
      "options": "Panda,Panda,Panda,Panda",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tata.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tata.png",
      "options": "Tata,Tata,Tata,Tata",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ob.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ob.png",
      "options": "Ob,Ob,Ob,Ob",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_napster.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_napster.png",
      "options": "Napster,Napster,Napster,Napster",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nascar.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nascar.png",
      "options": "Nascar,Nascar,Nascar,Nascar",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yoigo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yoigo.png",
      "options": "Yoigo,Yoigo,Yoigo,Yoigo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_texaco.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_texaco.png",
      "options": "Texaco,Texaco,Texaco,Texaco",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_thaiairways.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_thaiairways.png",
      "options": "Thaiairways,Thaiairways,Thaiairways,Thaiairways",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_myspace.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_myspace.png",
      "options": "Myspace,Myspace,Myspace,Myspace",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yinyang.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yinyang.png",
      "options": "Yinyang,Yinyang,Yinyang,Yinyang",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yamaha.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yamaha.png",
      "options": "Yamaha,Yamaha,Yamaha,Yamaha",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_xgames.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_xgames.png",
      "options": "Xgames,Xgames,Xgames,Xgames",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_xerox.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_xerox.png",
      "options": "Xerox,Xerox,Xerox,Xerox",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nescafe.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nescafe.png",
      "options": "Nescafe,Nescafe,Nescafe,Nescafe",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nbc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nbc.png",
      "options": "Nbc,Nbc,Nbc,Nbc",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nato.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nato.png",
      "options": "Nato,Nato,Nato,Nato",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tesco.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tesco.png",
      "options": "Tesco,Tesco,Tesco,Tesco",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mustang.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mustang.png",
      "options": "Mustang,Mustang,Mustang,Mustang",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_munich.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_munich.png",
      "options": "Munich,Munich,Munich,Munich",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_thq.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_thq.png",
      "options": "Thq,Thq,Thq,Thq",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_thesimpsons.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_thesimpsons.png",
      "options": "Thesimpsons,Thesimpsons,Thesimpsons,Thesimpsons",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mothercare.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mothercare.png",
      "options": "Mothercare,Mothercare,Mothercare,Mothercare",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_morgan.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_morgan.png",
      "options": "Morgan,Morgan,Morgan,Morgan",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zodiac.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zodiac.png",
      "options": "Zodiac,Zodiac,Zodiac,Zodiac",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_montblanc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_montblanc.png",
      "options": "Montblanc,Montblanc,Montblanc,Montblanc",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yvesrocher.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_yvesrocher.png",
      "options": "Yvesrocher,Yvesrocher,Yvesrocher,Yvesrocher",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_motogp.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_motogp.png",
      "options": "Motogp,Motogp,Motogp,Motogp",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_msn.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_msn.png",
      "options": "Msn,Msn,Msn,Msn",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_thebeatles.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_thebeatles.png",
      "options": "Thebeatles,Thebeatles,Thebeatles,Thebeatles",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_movistar.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_movistar.png",
      "options": "Movistar,Movistar,Movistar,Movistar",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mountaindew.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mountaindew.png",
      "options": "Mountaindew,Mountaindew,Mountaindew,Mountaindew",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_motorola.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_motorola.png",
      "options": "Motorola,Motorola,Motorola,Motorola",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nestea.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nestea.png",
      "options": "Nestea,Nestea,Nestea,Nestea",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nestle.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nestle.png",
      "options": "Nestle,Nestle,Nestle,Nestle",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nvidia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nvidia.png",
      "options": "Nvidia,Nvidia,Nvidia,Nvidia",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wifi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wifi.png",
      "options": "Wifi,Wifi,Wifi,Wifi",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nttdocomo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nttdocomo.png",
      "options": "Nttdocomo,Nttdocomo,Nttdocomo,Nttdocomo",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_novartis.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_novartis.png",
      "options": "Novartis,Novartis,Novartis,Novartis",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_winston.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_winston.png",
      "options": "Winston,Winston,Winston,Winston",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_time.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_time.png",
      "options": "Time,Time,Time,Time",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oakley.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oakley.png",
      "options": "Oakley,Oakley,Oakley,Oakley",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vogue.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vogue.png",
      "options": "Vogue,Vogue,Vogue,Vogue",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_omega.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_omega.png",
      "options": "Omega,Omega,Omega,Omega",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_telefonica.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_telefonica.png",
      "options": "Telefonica,Telefonica,Telefonica,Telefonica",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_olympus.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_olympus.png",
      "options": "Olympus,Olympus,Olympus,Olympus",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_olivetti.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_olivetti.png",
      "options": "Olivetti,Olivetti,Olivetti,Olivetti",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oilily.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oilily.png",
      "options": "Oilily,Oilily,Oilily,Oilily",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oldnavy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oldnavy.png",
      "options": "Oldnavy,Oldnavy,Oldnavy,Oldnavy",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nokia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nokia.png",
      "options": "Nokia,Nokia,Nokia,Nokia",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wrangler.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wrangler.png",
      "options": "Wrangler,Wrangler,Wrangler,Wrangler",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nfl.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nfl.png",
      "options": "Nfl,Nfl,Nfl,Nfl",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nielsen.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nielsen.png",
      "options": "Nielsen,Nielsen,Nielsen,Nielsen",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_xmen.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_xmen.png",
      "options": "Xmen,Xmen,Xmen,Xmen",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_netvibes.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_netvibes.png",
      "options": "Netvibes,Netvibes,Netvibes,Netvibes",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_netflix.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_netflix.png",
      "options": "Netflix,Netflix,Netflix,Netflix",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_netscape.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_netscape.png",
      "options": "Netscape,Netscape,Netscape,Netscape",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zurich.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zurich.png",
      "options": "Zurich,Zurich,Zurich,Zurich",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nikita.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nikita.png",
      "options": "Nikita,Nikita,Nikita,Nikita",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nirvana.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nirvana.png",
      "options": "Nirvana,Nirvana,Nirvana,Nirvana",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nixon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nixon.png",
      "options": "Nixon,Nixon,Nixon,Nixon",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_telenor.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_telenor.png",
      "options": "Telenor,Telenor,Telenor,Telenor",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wurth.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_wurth.png",
      "options": "Wurth,Wurth,Wurth,Wurth",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nikon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_nikon.png",
      "options": "Nikon,Nikon,Nikon,Nikon",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oracle.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_oracle.png",
      "options": "Oracle,Oracle,Oracle,Oracle",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_swarovski.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_swarovski.png",
      "options": "Swarovski,Swarovski,Swarovski,Swarovski",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ubuntu.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ubuntu.png",
      "options": "Ubuntu,Ubuntu,Ubuntu,Ubuntu",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_scalextric.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_scalextric.png",
      "options": "Scalextric,Scalextric,Scalextric,Scalextric",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_saturn.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_saturn.png",
      "options": "Saturn,Saturn,Saturn,Saturn",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sap.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sap.png",
      "options": "Sap,Sap,Sap,Sap",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sanyo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sanyo.png",
      "options": "Sanyo,Sanyo,Sanyo,Sanyo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_steelcase.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_steelcase.png",
      "options": "Steelcase,Steelcase,Steelcase,Steelcase",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ubs.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ubs.png",
      "options": "Ubs,Ubs,Ubs,Ubs",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_schwarzkopf.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_schwarzkopf.png",
      "options": "Schwarzkopf,Schwarzkopf,Schwarzkopf,Schwarzkopf",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shazam.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shazam.png",
      "options": "Shazam,Shazam,Shazam,Shazam",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_starter.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_starter.png",
      "options": "Starter,Starter,Starter,Starter",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tostitos.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tostitos.png",
      "options": "Tostitos,Tostitos,Tostitos,Tostitos",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sharp.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sharp.png",
      "options": "Sharp,Sharp,Sharp,Sharp",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_seat.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_seat.png",
      "options": "Seat,Seat,Seat,Seat",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_seiko.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_seiko.png",
      "options": "Seiko,Seiko,Seiko,Seiko",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_santana.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_santana.png",
      "options": "Santana,Santana,Santana,Santana",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mobil.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mobil.png",
      "options": "Mobil,Mobil,Mobil,Mobil",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ryanair.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ryanair.png",
      "options": "Ryanair,Ryanair,Ryanair,Ryanair",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_umbro.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_umbro.png",
      "options": "Umbro,Umbro,Umbro,Umbro",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_royalmail.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_royalmail.png",
      "options": "Royalmail,Royalmail,Royalmail,Royalmail",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_stumbleupon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_stumbleupon.png",
      "options": "Stumbleupon,Stumbleupon,Stumbleupon,Stumbleupon",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rovio.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rovio.png",
      "options": "Rovio,Rovio,Rovio,Rovio",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rowenta.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rowenta.png",
      "options": "Rowenta,Rowenta,Rowenta,Rowenta",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_saab.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_saab.png",
      "options": "Saab,Saab,Saab,Saab",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_safeway.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_safeway.png",
      "options": "Safeway,Safeway,Safeway,Safeway",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ugg.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ugg.png",
      "options": "Ugg,Ugg,Ugg,Ugg",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zte.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_zte.png",
      "options": "Zte,Zte,Zte,Zte",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_samsonite.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_samsonite.png",
      "options": "Samsonite,Samsonite,Samsonite,Samsonite",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_salomon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_salomon.png",
      "options": "Salomon,Salomon,Salomon,Salomon",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_saintgobain.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_saintgobain.png",
      "options": "Saintgobain,Saintgobain,Saintgobain,Saintgobain",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sheraton.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sheraton.png",
      "options": "Sheraton,Sheraton,Sheraton,Sheraton",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tupperware.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tupperware.png",
      "options": "Tupperware,Tupperware,Tupperware,Tupperware",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_speedo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_speedo.png",
      "options": "Speedo,Speedo,Speedo,Speedo",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spiderman.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spiderman.png",
      "options": "Spiderman,Spiderman,Spiderman,Spiderman",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spanair.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spanair.png",
      "options": "Spanair,Spanair,Spanair,Spanair",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_soundcloud.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_soundcloud.png",
      "options": "Soundcloud,Soundcloud,Soundcloud,Soundcloud",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_trango.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_trango.png",
      "options": "Trango,Trango,Trango,Trango",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_snickers.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_snickers.png",
      "options": "Snickers,Snickers,Snickers,Snickers",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spiuk.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spiuk.png",
      "options": "Spiuk,Spiuk,Spiuk,Spiuk",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_staedtler.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_staedtler.png",
      "options": "Staedtler,Staedtler,Staedtler,Staedtler",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_spy.png",
      "options": "Spy,Spy,Spy,Spy",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tous.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tous.png",
      "options": "Tous,Tous,Tous,Tous",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_toystory.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_toystory.png",
      "options": "Toystory,Toystory,Toystory,Toystory",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_stabilo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_stabilo.png",
      "options": "Stabilo,Stabilo,Stabilo,Stabilo",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sprint.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sprint.png",
      "options": "Sprint,Sprint,Sprint,Sprint",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_trident.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_trident.png",
      "options": "Trident,Trident,Trident,Trident",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_triumph.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_triumph.png",
      "options": "Triumph,Triumph,Triumph,Triumph",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shrek.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shrek.png",
      "options": "Shrek,Shrek,Shrek,Shrek",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sidi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sidi.png",
      "options": "Sidi,Sidi,Sidi,Sidi",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_showtime.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_showtime.png",
      "options": "Showtime,Showtime,Showtime,Showtime",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shoei.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shoei.png",
      "options": "Shoei,Shoei,Shoei,Shoei",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shimano.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shimano.png",
      "options": "Shimano,Shimano,Shimano,Shimano",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shiseido.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_shiseido.png",
      "options": "Shiseido,Shiseido,Shiseido,Shiseido",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sixflags.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_sixflags.png",
      "options": "Sixflags,Sixflags,Sixflags,Sixflags",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_skf.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_skf.png",
      "options": "Skf,Skf,Skf,Skf",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_slazenger.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_slazenger.png",
      "options": "Slazenger,Slazenger,Slazenger,Slazenger",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_staples.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_staples.png",
      "options": "Staples,Staples,Staples,Staples",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_skype.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_skype.png",
      "options": "Skype,Skype,Skype,Skype",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_skullcandy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_skullcandy.png",
      "options": "Skullcandy,Skullcandy,Skullcandy,Skullcandy",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_starwars.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_starwars.png",
      "options": "Starwars,Starwars,Starwars,Starwars",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rover.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rover.png",
      "options": "Rover,Rover,Rover,Rover",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_unclebens.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_unclebens.png",
      "options": "Unclebens,Unclebens,Unclebens,Unclebens",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_princeton.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_princeton.png",
      "options": "Princeton,Princeton,Princeton,Princeton",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_suzuki.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_suzuki.png",
      "options": "Suzuki,Suzuki,Suzuki,Suzuki",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_prince.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_prince.png",
      "options": "Prince,Prince,Prince,Prince",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_verbatim.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_verbatim.png",
      "options": "Verbatim,Verbatim,Verbatim,Verbatim",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_verisign.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_verisign.png",
      "options": "Verisign,Verisign,Verisign,Verisign",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_powerade.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_powerade.png",
      "options": "Powerade,Powerade,Powerade,Powerade",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pritt.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pritt.png",
      "options": "Pritt,Pritt,Pritt,Pritt",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_suse.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_suse.png",
      "options": "Suse,Suse,Suse,Suse",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vauxhall.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vauxhall.png",
      "options": "Vauxhall,Vauxhall,Vauxhall,Vauxhall",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vans.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vans.png",
      "options": "Vans,Vans,Vans,Vans",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_qualcomm.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_qualcomm.png",
      "options": "Qualcomm,Qualcomm,Qualcomm,Qualcomm",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_qantas.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_qantas.png",
      "options": "Qantas,Qantas,Qantas,Qantas",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_purina.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_purina.png",
      "options": "Purina,Purina,Purina,Purina",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_timberland.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_timberland.png",
      "options": "Timberland,Timberland,Timberland,Timberland",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_verizon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_verizon.png",
      "options": "Verizon,Verizon,Verizon,Verizon",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_porsche.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_porsche.png",
      "options": "Porsche,Porsche,Porsche,Porsche",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_symantec.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_symantec.png",
      "options": "Symantec,Symantec,Symantec,Symantec",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vimeo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vimeo.png",
      "options": "Vimeo,Vimeo,Vimeo,Vimeo",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tnt.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tnt.png",
      "options": "Tnt,Tnt,Tnt,Tnt",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vivo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vivo.png",
      "options": "Vivo,Vivo,Vivo,Vivo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pirelli.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pirelli.png",
      "options": "Pirelli,Pirelli,Pirelli,Pirelli",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tissot.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tissot.png",
      "options": "Tissot,Tissot,Tissot,Tissot",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_viator.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_viator.png",
      "options": "Viator,Viator,Viator,Viator",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playskool.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_playskool.png",
      "options": "Playskool,Playskool,Playskool,Playskool",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_polaroid.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_polaroid.png",
      "options": "Polaroid,Polaroid,Polaroid,Polaroid",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pontiac.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pontiac.png",
      "options": "Pontiac,Pontiac,Pontiac,Pontiac",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pokerstars.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_pokerstars.png",
      "options": "Pokerstars,Pokerstars,Pokerstars,Pokerstars",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vespa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_vespa.png",
      "options": "Vespa,Vespa,Vespa,Vespa",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ssangyong.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ssangyong.png",
      "options": "Ssangyong,Ssangyong,Ssangyong,Ssangyong",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_quilmes.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_quilmes.png",
      "options": "Quilmes,Quilmes,Quilmes,Quilmes",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_quiznos.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_quiznos.png",
      "options": "Quiznos,Quiznos,Quiznos,Quiznos",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rollerblade.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rollerblade.png",
      "options": "Rollerblade,Rollerblade,Rollerblade,Rollerblade",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rollsroyce.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rollsroyce.png",
      "options": "Rollsroyce,Rollsroyce,Rollsroyce,Rollsroyce",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rockstar.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rockstar.png",
      "options": "Rockstar,Rockstar,Rockstar,Rockstar",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_roche.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_roche.png",
      "options": "Roche,Roche,Roche,Roche",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rexona.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rexona.png",
      "options": "Rexona,Rexona,Rexona,Rexona",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ritzcarlton.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ritzcarlton.png",
      "options": "Ritzcarlton,Ritzcarlton,Ritzcarlton,Ritzcarlton",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_unilever.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_unilever.png",
      "options": "Unilever,Unilever,Unilever,Unilever",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_roncato.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_roncato.png",
      "options": "Roncato,Roncato,Roncato,Roncato",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rossignol.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rossignol.png",
      "options": "Rossignol,Rossignol,Rossignol,Rossignol",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rotring.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rotring.png",
      "options": "Rotring,Rotring,Rotring,Rotring",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_subaru.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_subaru.png",
      "options": "Subaru,Subaru,Subaru,Subaru",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_underarmour.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_underarmour.png",
      "options": "Underarmour,Underarmour,Underarmour,Underarmour",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_unesco.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_unesco.png",
      "options": "Unesco,Unesco,Unesco,Unesco",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reuters.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reuters.png",
      "options": "Reuters,Reuters,Reuters,Reuters",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reusch.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reusch.png",
      "options": "Reusch,Reusch,Reusch,Reusch",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_randstad.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_randstad.png",
      "options": "Randstad,Randstad,Randstad,Randstad",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_usb.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_usb.png",
      "options": "Usb,Usb,Usb,Usb",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ramones.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ramones.png",
      "options": "Ramones,Ramones,Ramones,Ramones",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ralphlauren.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ralphlauren.png",
      "options": "Ralphlauren,Ralphlauren,Ralphlauren,Ralphlauren",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rabobank.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_rabobank.png",
      "options": "Rabobank,Rabobank,Rabobank,Rabobank",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_superman.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_superman.png",
      "options": "Superman,Superman,Superman,Superman",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_usairways.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_usairways.png",
      "options": "Usairways,Usairways,Usairways,Usairways",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_redcross.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_redcross.png",
      "options": "Redcross,Redcross,Redcross,Redcross",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reef.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reef.png",
      "options": "Reef,Reef,Reef,Reef",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_renault.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_renault.png",
      "options": "Renault,Renault,Renault,Renault",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reebok.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reebok.png",
      "options": "Reebok,Reebok,Reebok,Reebok",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reddit.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_reddit.png",
      "options": "Reddit,Reddit,Reddit,Reddit",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_redhat.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_redhat.png",
      "options": "Redhat,Redhat,Redhat,Redhat",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tacobell.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_tacobell.png",
      "options": "Tacobell,Tacobell,Tacobell,Tacobell",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_landwind.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_landwind.png",
      "options": "Landwind,Landwind,Landwind,Landwind",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_champion.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_champion.png",
      "options": "Champion,Champion,Champion,Champion",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chase.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chase.png",
      "options": "Chase,Chase,Chase,Chase",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cheerios.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cheerios.png",
      "options": "Cheerios,Cheerios,Cheerios,Cheerios",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_centralperk.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_centralperk.png",
      "options": "Centralperk,Centralperk,Centralperk,Centralperk",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cbs.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cbs.png",
      "options": "Cbs,Cbs,Cbs,Cbs",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_castrol.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_castrol.png",
      "options": "Castrol,Castrol,Castrol,Castrol",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_caterham.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_caterham.png",
      "options": "Caterham,Caterham,Caterham,Caterham",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_caterpillar.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_caterpillar.png",
      "options": "Caterpillar,Caterpillar,Caterpillar,Caterpillar",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chery.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chery.png",
      "options": "Chery,Chery,Chery,Chery",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chevrolet.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chevrolet.png",
      "options": "Chevrolet,Chevrolet,Chevrolet,Chevrolet",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chivasregal.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chivasregal.png",
      "options": "Chivasregal,Chivasregal,Chivasregal,Chivasregal",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chrysler.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chrysler.png",
      "options": "Chrysler,Chrysler,Chrysler,Chrysler",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cisco.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cisco.png",
      "options": "Cisco,Cisco,Cisco,Cisco",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chipsahoy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chipsahoy.png",
      "options": "Chipsahoy,Chipsahoy,Chipsahoy,Chipsahoy",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chinaunicom.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chinaunicom.png",
      "options": "Chinaunicom,Chinaunicom,Chinaunicom,Chinaunicom",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chevron.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chevron.png",
      "options": "Chevron,Chevron,Chevron,Chevron",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chili.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chili.png",
      "options": "Chili,Chili,Chili,Chili",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chinamobile.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_chinamobile.png",
      "options": "Chinamobile,Chinamobile,Chinamobile,Chinamobile",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_castelli.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_castelli.png",
      "options": "Castelli,Castelli,Castelli,Castelli",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_carhartt.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_carhartt.png",
      "options": "Carhartt,Carhartt,Carhartt,Carhartt",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bugatti.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bugatti.png",
      "options": "Bugatti,Bugatti,Bugatti,Bugatti",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_buick.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_buick.png",
      "options": "Buick,Buick,Buick,Buick",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_burberry.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_burberry.png",
      "options": "Burberry,Burberry,Burberry,Burberry",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_budweiser.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_budweiser.png",
      "options": "Budweiser,Budweiser,Budweiser,Budweiser",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bubbagump.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bubbagump.png",
      "options": "Bubbagump,Bubbagump,Bubbagump,Bubbagump",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_brita.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_brita.png",
      "options": "Brita,Brita,Brita,Brita",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_brother.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_brother.png",
      "options": "Brother,Brother,Brother,Brother",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_brugal.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_brugal.png",
      "options": "Brugal,Brugal,Brugal,Brugal",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_burton.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_burton.png",
      "options": "Burton,Burton,Burton,Burton",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bvlgari.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bvlgari.png",
      "options": "Bvlgari,Bvlgari,Bvlgari,Bvlgari",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_campbells.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_campbells.png",
      "options": "Campbells,Campbells,Campbells,Campbells",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_camper.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_camper.png",
      "options": "Camper,Camper,Camper,Camper",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cannes.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cannes.png",
      "options": "Cannes,Cannes,Cannes,Cannes",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_camel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_camel.png",
      "options": "Camel,Camel,Camel,Camel",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_calvinklein.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_calvinklein.png",
      "options": "Calvinklein,Calvinklein,Calvinklein,Calvinklein",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cacharel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cacharel.png",
      "options": "Cacharel,Cacharel,Cacharel,Cacharel",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cadillac.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cadillac.png",
      "options": "Cadillac,Cadillac,Cadillac,Cadillac",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_citi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_citi.png",
      "options": "Citi,Citi,Citi,Citi",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_citroen.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_citroen.png",
      "options": "Citroen,Citroen,Citroen,Citroen",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_davidoff.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_davidoff.png",
      "options": "Davidoff,Davidoff,Davidoff,Davidoff",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dcshoes.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dcshoes.png",
      "options": "Dcshoes,Dcshoes,Dcshoes,Dcshoes",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dell.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dell.png",
      "options": "Dell,Dell,Dell,Dell",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dakine.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dakine.png",
      "options": "Dakine,Dakine,Dakine,Dakine",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dakar.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dakar.png",
      "options": "Dakar,Dakar,Dakar,Dakar",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_daihatsu.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_daihatsu.png",
      "options": "Daihatsu,Daihatsu,Daihatsu,Daihatsu",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_daikin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_daikin.png",
      "options": "Daikin,Daikin,Daikin,Daikin",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dainese.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dainese.png",
      "options": "Dainese,Dainese,Dainese,Dainese",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_deloitte.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_deloitte.png",
      "options": "Deloitte,Deloitte,Deloitte,Deloitte",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_delonghi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_delonghi.png",
      "options": "Delonghi,Delonghi,Delonghi,Delonghi",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dolby.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dolby.png",
      "options": "Dolby,Dolby,Dolby,Dolby",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dole.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dole.png",
      "options": "Dole,Dole,Dole,Dole",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_drpepper.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_drpepper.png",
      "options": "Drpepper,Drpepper,Drpepper,Drpepper",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dodge.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dodge.png",
      "options": "Dodge,Dodge,Dodge,Dodge",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dinersclub.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dinersclub.png",
      "options": "Dinersclub,Dinersclub,Dinersclub,Dinersclub",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_descente.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_descente.png",
      "options": "Descente,Descente,Descente,Descente",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_diadora.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_diadora.png",
      "options": "Diadora,Diadora,Diadora,Diadora",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dickies.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dickies.png",
      "options": "Dickies,Dickies,Dickies,Dickies",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_daewoo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_daewoo.png",
      "options": "Daewoo,Daewoo,Daewoo,Daewoo",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dacia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dacia.png",
      "options": "Dacia,Dacia,Dacia,Dacia",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_columbia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_columbia.png",
      "options": "Columbia,Columbia,Columbia,Columbia",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_commandos.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_commandos.png",
      "options": "Commandos,Commandos,Commandos,Commandos",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_compaq.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_compaq.png",
      "options": "Compaq,Compaq,Compaq,Compaq",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cohiba.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cohiba.png",
      "options": "Cohiba,Cohiba,Cohiba,Cohiba",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cnn.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cnn.png",
      "options": "Cnn,Cnn,Cnn,Cnn",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_clarin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_clarin.png",
      "options": "Clarin,Clarin,Clarin,Clarin",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_clinique.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_clinique.png",
      "options": "Clinique,Clinique,Clinique,Clinique",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cnet.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cnet.png",
      "options": "Cnet,Cnet,Cnet,Cnet",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_compeed.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_compeed.png",
      "options": "Compeed,Compeed,Compeed,Compeed",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_converse.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_converse.png",
      "options": "Converse,Converse,Converse,Converse",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_costco.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_costco.png",
      "options": "Costco,Costco,Costco,Costco",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_creative.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_creative.png",
      "options": "Creative,Creative,Creative,Creative",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cressi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_cressi.png",
      "options": "Cressi,Cressi,Cressi,Cressi",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_corvette.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_corvette.png",
      "options": "Corvette,Corvette,Corvette,Corvette",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_coronaextra.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_coronaextra.png",
      "options": "Coronaextra,Coronaextra,Coronaextra,Coronaextra",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_coolway.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_coolway.png",
      "options": "Coolway,Coolway,Coolway,Coolway",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_coors.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_coors.png",
      "options": "Coors,Coors,Coors,Coors",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bridgestone.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bridgestone.png",
      "options": "Bridgestone,Bridgestone,Bridgestone,Bridgestone",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_breitling.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_breitling.png",
      "options": "Breitling,Breitling,Breitling,Breitling",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_alfaromeo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_alfaromeo.png",
      "options": "Alfaromeo,Alfaromeo,Alfaromeo,Alfaromeo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_alitalia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_alitalia.png",
      "options": "Alitalia,Alitalia,Alitalia,Alitalia",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amstel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amstel.png",
      "options": "Amstel,Amstel,Amstel,Amstel",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_alcatel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_alcatel.png",
      "options": "Alcatel,Alcatel,Alcatel,Alcatel",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aljazeera.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aljazeera.png",
      "options": "Aljazeera,Aljazeera,Aljazeera,Aljazeera",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airness.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airness.png",
      "options": "Airness,Airness,Airness,Airness",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airwalk.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airwalk.png",
      "options": "Airwalk,Airwalk,Airwalk,Airwalk",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aiwa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aiwa.png",
      "options": "Aiwa,Aiwa,Aiwa,Aiwa",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amstrad.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amstrad.png",
      "options": "Amstrad,Amstrad,Amstrad,Amstrad",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amtrak.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_amtrak.png",
      "options": "Amtrak,Amtrak,Amtrak,Amtrak",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aquafina.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aquafina.png",
      "options": "Aquafina,Aquafina,Aquafina,Aquafina",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aquarius.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aquarius.png",
      "options": "Aquarius,Aquarius,Aquarius,Aquarius",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_armani.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_armani.png",
      "options": "Armani,Armani,Armani,Armani",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aprilia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aprilia.png",
      "options": "Aprilia,Aprilia,Aprilia,Aprilia",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aperol.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aperol.png",
      "options": "Aperol,Aperol,Aperol,Aperol",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_anic.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_anic.png",
      "options": "Anic,Anic,Anic,Anic",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_anon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_anon.png",
      "options": "Anon,Anon,Anon,Anon",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_anonymous.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_anonymous.png",
      "options": "Anonymous,Anonymous,Anonymous,Anonymous",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airbus.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airbus.png",
      "options": "Airbus,Airbus,Airbus,Airbus",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airjordan.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airjordan.png",
      "options": "Airjordan,Airjordan,Airjordan,Airjordan",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_acer.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_acer.png",
      "options": "Acer,Acer,Acer,Acer",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_activision.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_activision.png",
      "options": "Activision,Activision,Activision,Activision",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_acura.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_acura.png",
      "options": "Acura,Acura,Acura,Acura",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_acdc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_acdc.png",
      "options": "Acdc,Acdc,Acdc,Acdc",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_accenture.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_accenture.png",
      "options": "Accenture,Accenture,Accenture,Accenture",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_abbott.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_abbott.png",
      "options": "Abbott,Abbott,Abbott,Abbott",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_abc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_abc.png",
      "options": "Abc,Abc,Abc,Abc",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_abnamro.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_abnamro.png",
      "options": "Abnamro,Abnamro,Abnamro,Abnamro",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_adio.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_adio.png",
      "options": "Adio,Adio,Adio,Adio",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_adobe.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_adobe.png",
      "options": "Adobe,Adobe,Adobe,Adobe",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airberlin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airberlin.png",
      "options": "Airberlin,Airberlin,Airberlin,Airberlin",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aircanada.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aircanada.png",
      "options": "Aircanada,Aircanada,Aircanada,Aircanada",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airfrance.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_airfrance.png",
      "options": "Airfrance,Airfrance,Airfrance,Airfrance",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aig.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aig.png",
      "options": "Aig,Aig,Aig,Aig",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_agv.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_agv.png",
      "options": "Agv,Agv,Agv,Agv",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aegon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aegon.png",
      "options": "Aegon,Aegon,Aegon,Aegon",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aeroflot.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aeroflot.png",
      "options": "Aeroflot,Aeroflot,Aeroflot,Aeroflot",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_asics.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_asics.png",
      "options": "Asics,Asics,Asics,Asics",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_astonmartin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_astonmartin.png",
      "options": "Astonmartin,Astonmartin,Astonmartin,Astonmartin",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_billabong.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_billabong.png",
      "options": "Billabong,Billabong,Billabong,Billabong",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_biotherm.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_biotherm.png",
      "options": "Biotherm,Biotherm,Biotherm,Biotherm",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_birdhouse.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_birdhouse.png",
      "options": "Birdhouse,Birdhouse,Birdhouse,Birdhouse",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bestwestern.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bestwestern.png",
      "options": "Bestwestern,Bestwestern,Bestwestern,Bestwestern",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bestbuy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bestbuy.png",
      "options": "Bestbuy,Bestbuy,Bestbuy,Bestbuy",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_becks.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_becks.png",
      "options": "Becks,Becks,Becks,Becks",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_beefeater.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_beefeater.png",
      "options": "Beefeater,Beefeater,Beefeater,Beefeater",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bentley.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bentley.png",
      "options": "Bentley,Bentley,Bentley,Bentley",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_blizzard.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_blizzard.png",
      "options": "Blizzard,Blizzard,Blizzard,Blizzard",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_blockbuster.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_blockbuster.png",
      "options": "Blockbuster,Blockbuster,Blockbuster,Blockbuster",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bradesco.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bradesco.png",
      "options": "Bradesco,Bradesco,Bradesco,Bradesco",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_braun.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_braun.png",
      "options": "Braun,Braun,Braun,Braun",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_breil.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_breil.png",
      "options": "Breil,Breil,Breil,Breil",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bosch.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bosch.png",
      "options": "Bosch,Bosch,Bosch,Bosch",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_boeing.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_boeing.png",
      "options": "Boeing,Boeing,Boeing,Boeing",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_blogger.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_blogger.png",
      "options": "Blogger,Blogger,Blogger,Blogger",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bluetooth.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bluetooth.png",
      "options": "Bluetooth,Bluetooth,Bluetooth,Bluetooth",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bnpparibas.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bnpparibas.png",
      "options": "Bnpparibas,Bnpparibas,Bnpparibas,Bnpparibas",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bbva.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bbva.png",
      "options": "Bbva,Bbva,Bbva,Bbva",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bbc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bbc.png",
      "options": "Bbc,Bbc,Bbc,Bbc",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_auntieannes.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_auntieannes.png",
      "options": "Auntieannes,Auntieannes,Auntieannes,Auntieannes",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_avis.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_avis.png",
      "options": "Avis,Avis,Avis,Avis",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_avon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_avon.png",
      "options": "Avon,Avon,Avon,Avon",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_atp.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_atp.png",
      "options": "Atp,Atp,Atp,Atp",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_atomic.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_atomic.png",
      "options": "Atomic,Atomic,Atomic,Atomic",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_asus.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_asus.png",
      "options": "Asus,Asus,Asus,Asus",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ati.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ati.png",
      "options": "Ati,Ati,Ati,Ati",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aticod.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_aticod.png",
      "options": "Aticod,Aticod,Aticod,Aticod",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_axn.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_axn.png",
      "options": "Axn,Axn,Axn,Axn",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_babolat.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_babolat.png",
      "options": "Babolat,Babolat,Babolat,Babolat",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_basf.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_basf.png",
      "options": "Basf,Basf,Basf,Basf",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_batman.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_batman.png",
      "options": "Batman,Batman,Batman,Batman",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bayer.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bayer.png",
      "options": "Bayer,Bayer,Bayer,Bayer",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bankofchina.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_bankofchina.png",
      "options": "Bankofchina,Bankofchina,Bankofchina,Bankofchina",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ballantines.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ballantines.png",
      "options": "Ballantines,Ballantines,Ballantines,Ballantines",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_baidu.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_baidu.png",
      "options": "Baidu,Baidu,Baidu,Baidu",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_balay.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_balay.png",
      "options": "Balay,Balay,Balay,Balay",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dragon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dragon.png",
      "options": "Dragon,Dragon,Dragon,Dragon",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dragonball.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dragonball.png",
      "options": "Dragonball,Dragonball,Dragonball,Dragonball",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kiip.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kiip.png",
      "options": "Kiip,Kiip,Kiip,Kiip",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kingston.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kingston.png",
      "options": "Kingston,Kingston,Kingston,Kingston",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_knex.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_knex.png",
      "options": "Knex,Knex,Knex,Knex",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kenzo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kenzo.png",
      "options": "Kenzo,Kenzo,Kenzo,Kenzo",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kenwood.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kenwood.png",
      "options": "Kenwood,Kenwood,Kenwood,Kenwood",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kawasaki.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kawasaki.png",
      "options": "Kawasaki,Kawasaki,Kawasaki,Kawasaki",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kddi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kddi.png",
      "options": "Kddi,Kddi,Kddi,Kddi",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kelme.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kelme.png",
      "options": "Kelme,Kelme,Kelme,Kelme",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kpmg.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kpmg.png",
      "options": "Kpmg,Kpmg,Kpmg,Kpmg",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kraft.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kraft.png",
      "options": "Kraft,Kraft,Kraft,Kraft",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lamborghini.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lamborghini.png",
      "options": "Lamborghini,Lamborghini,Lamborghini,Lamborghini",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lancia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lancia.png",
      "options": "Lancia,Lancia,Lancia,Lancia",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_landrover.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_landrover.png",
      "options": "Landrover,Landrover,Landrover,Landrover",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lada.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lada.png",
      "options": "Lada,Lada,Lada,Lada",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lacie.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lacie.png",
      "options": "Lacie,Lacie,Lacie,Lacie",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kronenbourg.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kronenbourg.png",
      "options": "Kronenbourg,Kronenbourg,Kronenbourg,Kronenbourg",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kswiss.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kswiss.png",
      "options": "Kswiss,Kswiss,Kswiss,Kswiss",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kyocera.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kyocera.png",
      "options": "Kyocera,Kyocera,Kyocera,Kyocera",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kappa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kappa.png",
      "options": "Kappa,Kappa,Kappa,Kappa",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kangol.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_kangol.png",
      "options": "Kangol,Kangol,Kangol,Kangol",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_isuzu.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_isuzu.png",
      "options": "Isuzu,Isuzu,Isuzu,Isuzu",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_iveco.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_iveco.png",
      "options": "Iveco,Iveco,Iveco,Iveco",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jackdaniels.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jackdaniels.png",
      "options": "Jackdaniels,Jackdaniels,Jackdaniels,Jackdaniels",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_infiniti.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_infiniti.png",
      "options": "Infiniti,Infiniti,Infiniti,Infiniti",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_independent.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_independent.png",
      "options": "Independent,Independent,Independent,Independent",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_icbc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_icbc.png",
      "options": "Icbc,Icbc,Icbc,Icbc",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_imdb.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_imdb.png",
      "options": "Imdb,Imdb,Imdb,Imdb",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_innout.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_innout.png",
      "options": "Innout,Innout,Innout,Innout",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jackass.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jackass.png",
      "options": "Jackass,Jackass,Jackass,Jackass",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jaguar.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jaguar.png",
      "options": "Jaguar,Jaguar,Jaguar,Jaguar",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_johnsmith.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_johnsmith.png",
      "options": "Johnsmith,Johnsmith,Johnsmith,Johnsmith",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_joma.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_joma.png",
      "options": "Joma,Joma,Joma,Joma",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jvc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jvc.png",
      "options": "Jvc,Jvc,Jvc,Jvc",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jetblue.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jetblue.png",
      "options": "Jetblue,Jetblue,Jetblue,Jetblue",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jeep.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jeep.png",
      "options": "Jeep,Jeep,Jeep,Jeep",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jb.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jb.png",
      "options": "Jb,Jb,Jb,Jb",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jbl.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_jbl.png",
      "options": "Jbl,Jbl,Jbl,Jbl",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_abarth.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_abarth.png",
      "options": "Abarth,Abarth,Abarth,Abarth",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lays.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lays.png",
      "options": "Lays,Lays,Lays,Lays",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mcafee.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mcafee.png",
      "options": "Mcafee,Mcafee,Mcafee,Mcafee",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_menshealth.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_menshealth.png",
      "options": "Menshealth,Menshealth,Menshealth,Menshealth",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mercedes.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mercedes.png",
      "options": "Mercedes,Mercedes,Mercedes,Mercedes",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_maybach.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_maybach.png",
      "options": "Maybach,Maybach,Maybach,Maybach",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mattel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mattel.png",
      "options": "Mattel,Mattel,Mattel,Mattel",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mares.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mares.png",
      "options": "Mares,Mares,Mares,Mares",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_marshall.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_marshall.png",
      "options": "Marshall,Marshall,Marshall,Marshall",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_maserati.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_maserati.png",
      "options": "Maserati,Maserati,Maserati,Maserati",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mercury.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mercury.png",
      "options": "Mercury,Mercury,Mercury,Mercury",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_merrillynch.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_merrillynch.png",
      "options": "Merrillynch,Merrillynch,Merrillynch,Merrillynch",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mit.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mit.png",
      "options": "Mit,Mit,Mit,Mit",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mitsubishi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mitsubishi.png",
      "options": "Mitsubishi,Mitsubishi,Mitsubishi,Mitsubishi",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mizuno.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mizuno.png",
      "options": "Mizuno,Mizuno,Mizuno,Mizuno",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_misssixty.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_misssixty.png",
      "options": "Misssixty,Misssixty,Misssixty,Misssixty",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mikasa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mikasa.png",
      "options": "Mikasa,Mikasa,Mikasa,Mikasa",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_metallica.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_metallica.png",
      "options": "Metallica,Metallica,Metallica,Metallica",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mg.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mg.png",
      "options": "Mg,Mg,Mg,Mg",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_microsoft.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_microsoft.png",
      "options": "Microsoft,Microsoft,Microsoft,Microsoft",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_man.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_man.png",
      "options": "Man,Man,Man,Man",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mahindra.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mahindra.png",
      "options": "Mahindra,Mahindra,Mahindra,Mahindra",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lincoln.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lincoln.png",
      "options": "Lincoln,Lincoln,Lincoln,Lincoln",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_linkedin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_linkedin.png",
      "options": "Linkedin,Linkedin,Linkedin,Linkedin",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lloydstsb.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lloydstsb.png",
      "options": "Lloydstsb,Lloydstsb,Lloydstsb,Lloydstsb",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_liebherr.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_liebherr.png",
      "options": "Liebherr,Liebherr,Liebherr,Liebherr",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lining.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lining.png",
      "options": "Lining,Lining,Lining,Lining",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lebara.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lebara.png",
      "options": "Lebara,Lebara,Lebara,Lebara",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lee.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lee.png",
      "options": "Lee,Lee,Lee,Lee",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lexmark.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lexmark.png",
      "options": "Lexmark,Lexmark,Lexmark,Lexmark",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_loctite.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_loctite.png",
      "options": "Loctite,Loctite,Loctite,Loctite",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_loewe.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_loewe.png",
      "options": "Loewe,Loewe,Loewe,Loewe",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lufthansa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lufthansa.png",
      "options": "Lufthansa,Lufthansa,Lufthansa,Lufthansa",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mac.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mac.png",
      "options": "Mac,Mac,Mac,Mac",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_maggi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_maggi.png",
      "options": "Maggi,Maggi,Maggi,Maggi",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_luckystrike.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_luckystrike.png",
      "options": "Luckystrike,Luckystrike,Luckystrike,Luckystrike",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lotus.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_lotus.png",
      "options": "Lotus,Lotus,Lotus,Lotus",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_longines.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_longines.png",
      "options": "Longines,Longines,Longines,Longines",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_loreal.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_loreal.png",
      "options": "Loreal,Loreal,Loreal,Loreal",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_iberia.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_iberia.png",
      "options": "Iberia,Iberia,Iberia,Iberia",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_iberdrola.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_iberdrola.png",
      "options": "Iberdrola,Iberdrola,Iberdrola,Iberdrola",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fendi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fendi.png",
      "options": "Fendi,Fendi,Fendi,Fendi",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ferrari.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ferrari.png",
      "options": "Ferrari,Ferrari,Ferrari,Ferrari",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_festina.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_festina.png",
      "options": "Festina,Festina,Festina,Festina",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fender.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fender.png",
      "options": "Fender,Fender,Fender,Fender",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fbi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fbi.png",
      "options": "Fbi,Fbi,Fbi,Fbi",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_esteelauder.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_esteelauder.png",
      "options": "Esteelauder,Esteelauder,Esteelauder,Esteelauder",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_etnies.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_etnies.png",
      "options": "Etnies,Etnies,Etnies,Etnies",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_exxon.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_exxon.png",
      "options": "Exxon,Exxon,Exxon,Exxon",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fiat.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fiat.png",
      "options": "Fiat,Fiat,Fiat,Fiat",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fiba.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fiba.png",
      "options": "Fiba,Fiba,Fiba,Fiba",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fmi.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fmi.png",
      "options": "Fmi,Fmi,Fmi,Fmi",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_footlocker.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_footlocker.png",
      "options": "Footlocker,Footlocker,Footlocker,Footlocker",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_forbes.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_forbes.png",
      "options": "Forbes,Forbes,Forbes,Forbes",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_flickr.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_flickr.png",
      "options": "Flickr,Flickr,Flickr,Flickr",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_flash.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_flash.png",
      "options": "Flash,Flash,Flash,Flash",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fila.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fila.png",
      "options": "Fila,Fila,Fila,Fila",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_finnair.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_finnair.png",
      "options": "Finnair,Finnair,Finnair,Finnair",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fisherprice.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fisherprice.png",
      "options": "Fisherprice,Fisherprice,Fisherprice,Fisherprice",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_espn.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_espn.png",
      "options": "Espn,Espn,Espn,Espn",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ericsson.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ericsson.png",
      "options": "Ericsson,Ericsson,Ericsson,Ericsson",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dymo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dymo.png",
      "options": "Dymo,Dymo,Dymo,Dymo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_eastpak.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_eastpak.png",
      "options": "Eastpak,Eastpak,Eastpak,Eastpak",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_electric.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_electric.png",
      "options": "Electric,Electric,Electric,Electric",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_duracell.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_duracell.png",
      "options": "Duracell,Duracell,Duracell,Duracell",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dunlop.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dunlop.png",
      "options": "Dunlop,Dunlop,Dunlop,Dunlop",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dreamcast.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dreamcast.png",
      "options": "Dreamcast,Dreamcast,Dreamcast,Dreamcast",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ducati.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ducati.png",
      "options": "Ducati,Ducati,Ducati,Ducati",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dunhill.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_dunhill.png",
      "options": "Dunhill,Dunhill,Dunhill,Dunhill",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_electrolux.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_electrolux.png",
      "options": "Electrolux,Electrolux,Electrolux,Electrolux",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_element.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_element.png",
      "options": "Element,Element,Element,Element",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_endomondo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_endomondo.png",
      "options": "Endomondo,Endomondo,Endomondo,Endomondo",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_enel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_enel.png",
      "options": "Enel,Enel,Enel,Enel",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_energizer.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_energizer.png",
      "options": "Energizer,Energizer,Energizer,Energizer",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_endesa.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_endesa.png",
      "options": "Endesa,Endesa,Endesa,Endesa",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_emule.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_emule.png",
      "options": "Emule,Emule,Emule,Emule",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_elf.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_elf.png",
      "options": "Elf,Elf,Elf,Elf",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ellesse.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ellesse.png",
      "options": "Ellesse,Ellesse,Ellesse,Ellesse",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ford.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_ford.png",
      "options": "Ford,Ford,Ford,Ford",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_forum.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_forum.png",
      "options": "Forum,Forum,Forum,Forum",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_head.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_head.png",
      "options": "Head,Head,Head,Head",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hellboy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hellboy.png",
      "options": "Hellboy,Hellboy,Hellboy,Hellboy",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_herbalife.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_herbalife.png",
      "options": "Herbalife,Herbalife,Herbalife,Herbalife",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hbo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hbo.png",
      "options": "Hbo,Hbo,Hbo,Hbo",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hasbro.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hasbro.png",
      "options": "Hasbro,Hasbro,Hasbro,Hasbro",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_greengiant.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_greengiant.png",
      "options": "Greengiant,Greengiant,Greengiant,Greengiant",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_guinness.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_guinness.png",
      "options": "Guinness,Guinness,Guinness,Guinness",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hankook.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hankook.png",
      "options": "Hankook,Hankook,Hankook,Hankook",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hermes.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hermes.png",
      "options": "Hermes,Hermes,Hermes,Hermes",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hilton.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hilton.png",
      "options": "Hilton,Hilton,Hilton,Hilton",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hugoboss.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hugoboss.png",
      "options": "Hugoboss,Hugoboss,Hugoboss,Hugoboss",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hummel.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hummel.png",
      "options": "Hummel,Hummel,Hummel,Hummel",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hummer.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hummer.png",
      "options": "Hummer,Hummer,Hummer,Hummer",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_htc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_htc.png",
      "options": "Htc,Htc,Htc,Htc",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_honda.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_honda.png",
      "options": "Honda,Honda,Honda,Honda",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hofmannan.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_hofmannan.png",
      "options": "Hofmannan,Hofmannan,Hofmannan,Hofmannan",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_holidayinn.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_holidayinn.png",
      "options": "Holidayinn,Holidayinn,Holidayinn,Holidayinn",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gordons.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gordons.png",
      "options": "Gordons,Gordons,Gordons,Gordons",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_goodyear.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_goodyear.png",
      "options": "Goodyear,Goodyear,Goodyear,Goodyear",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fujifilm.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fujifilm.png",
      "options": "Fujifilm,Fujifilm,Fujifilm,Fujifilm",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fujitsu.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fujitsu.png",
      "options": "Fujitsu,Fujitsu,Fujitsu,Fujitsu",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gaggenau.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gaggenau.png",
      "options": "Gaggenau,Gaggenau,Gaggenau,Gaggenau",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_frigo.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_frigo.png",
      "options": "Frigo,Frigo,Frigo,Frigo",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_foxmotor.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_foxmotor.png",
      "options": "Foxmotor,Foxmotor,Foxmotor,Foxmotor",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fosters.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fosters.png",
      "options": "Fosters,Fosters,Fosters,Fosters",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_foursquare.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_foursquare.png",
      "options": "Foursquare,Foursquare,Foursquare,Foursquare",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fox.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_fox.png",
      "options": "Fox,Fox,Fox,Fox",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_galp.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_galp.png",
      "options": "Galp,Galp,Galp,Galp",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gap.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gap.png",
      "options": "Gap,Gap,Gap,Gap",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_givenchy.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_givenchy.png",
      "options": "Givenchy,Givenchy,Givenchy,Givenchy",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_globe.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_globe.png",
      "options": "Globe,Globe,Globe,Globe",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gmc.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gmc.png",
      "options": "Gmc,Gmc,Gmc,Gmc",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gillette.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gillette.png",
      "options": "Gillette,Gillette,Gillette,Gillette",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gibson.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gibson.png",
      "options": "Gibson,Gibson,Gibson,Gibson",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_garmin.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_garmin.png",
      "options": "Garmin,Garmin,Garmin,Garmin",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gatorade.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_gatorade.png",
      "options": "Gatorade,Gatorade,Gatorade,Gatorade",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mlb.png",
      "question": "https://logosquiz.net/data/logoquiz-mangoogames/images/logo_mlb.png",
      "options": "Mlb,Mlb,Mlb,Mlb",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/avast.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/avast.png",
      "options": "Avast,Avast,Avast,Avast",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/blu_ray.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/blu_ray.png",
      "options": "Blu ray,Blu ray,Blu ray,Blu ray",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/bosch.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/bosch.png",
      "options": "Bosch,Bosch,Bosch,Bosch",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/call_of_duty.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/call_of_duty.png",
      "options": "Call of duty,Call of duty,Call of duty,Call of duty",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/captain_america.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/captain_america.png",
      "options": "Captain america,Captain america,Captain america,Captain america",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car1.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car1.png",
      "options": "Ferrari,Ferrari,Ferrari,Ferrari",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car10.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car10.png",
      "options": "Renault,Renault,Renault,Renault",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car2.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car2.png",
      "options": "Lamborghini,Lamborghini,Lamborghini,Lamborghini",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car3.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car3.png",
      "options": "Lancia,Lancia,Lancia,Lancia",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car4.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car4.png",
      "options": "Maserati,Maserati,Maserati,Maserati",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car5.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car5.png",
      "options": "Buick,Buick,Buick,Buick",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car6.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car6.png",
      "options": "Cadillac,Cadillac,Cadillac,Cadillac",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car8.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car8.png",
      "options": "Opel,Opel,Opel,Opel",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car9.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car9.png",
      "options": "Porsche,Porsche,Porsche,Porsche",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/caterpillar.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/caterpillar.png",
      "options": "Caterpillar,Caterpillar,Caterpillar,Caterpillar",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/coca_cola.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/coca_cola.png",
      "options": "Coca cola,Coca cola,Coca cola,Coca cola",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/columbia_university.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/columbia_university.png",
      "options": "Columbia university,Columbia university,Columbia university,Columbia university",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp1.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp1.png",
      "options": "Gmail,Gmail,Gmail,Gmail",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp10.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp10.png",
      "options": "Angry Birds,Angry Birds,Angry Birds,Angry Birds",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp2.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp2.png",
      "options": "Intel,Intel,Intel,Intel",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp3.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp3.png",
      "options": "Logitech,Logitech,Logitech,Logitech",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp4.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp4.png",
      "options": "Dell,Dell,Dell,Dell",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp5.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp5.png",
      "options": "Napster,Napster,Napster,Napster",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp6.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp6.png",
      "options": "Blizzard,Blizzard,Blizzard,Blizzard",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp7.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp7.png",
      "options": "Brother,Brother,Brother,Brother",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp8.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp8.png",
      "options": "Nvidia,Nvidia,Nvidia,Nvidia",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp9.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp9.png",
      "options": "Guild Wars 2,Guild Wars 2,Guild Wars 2,Guild Wars 2",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food1.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food1.png",
      "options": "Knorr,Knorr,Knorr,Knorr",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food10.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food10.png",
      "options": "Red Bull,Red Bull,Red Bull,Red Bull",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food2.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food2.png",
      "options": "Heinz,Heinz,Heinz,Heinz",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food3.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food3.png",
      "options": "The Laughing Cow,The Laughing Cow,The Laughing Cow,The Laughing Cow",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food4.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food4.png",
      "options": "Quaker Oats,Quaker Oats,Quaker Oats,Quaker Oats",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food5.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food5.png",
      "options": "Burger King,Burger King,Burger King,Burger King",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food6.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food6.png",
      "options": "Kelloggs,Kelloggs,Kelloggs,Kelloggs",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food7.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food7.png",
      "options": "McDonalds,McDonalds,McDonalds,McDonalds",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food8.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food8.png",
      "options": "Nestle,Nestle,Nestle,Nestle",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/food9.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/food9.png",
      "options": "Pizza Hut,Pizza Hut,Pizza Hut,Pizza Hut",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/halo.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/halo.png",
      "options": "Halo,Halo,Halo,Halo",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/ikea.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/ikea.png",
      "options": "Ikea,Ikea,Ikea,Ikea",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/isuzu.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/isuzu.png",
      "options": "Isuzu,Isuzu,Isuzu,Isuzu",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/itunes.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/itunes.png",
      "options": "Itunes,Itunes,Itunes,Itunes",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/killzone.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/killzone.png",
      "options": "Killzone,Killzone,Killzone,Killzone",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/levis.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/levis.png",
      "options": "Levis,Levis,Levis,Levis",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/lipton.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/lipton.png",
      "options": "Lipton,Lipton,Lipton,Lipton",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/marlboro.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/marlboro.png",
      "options": "Marlboro,Marlboro,Marlboro,Marlboro",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/nasa.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/nasa.png",
      "options": "Nasa,Nasa,Nasa,Nasa",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/orange.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/orange.png",
      "options": "Orange,Orange,Orange,Orange",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/pepsi.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/pepsi.png",
      "options": "Pepsi,Pepsi,Pepsi,Pepsi",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/piaggio.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/piaggio.png",
      "options": "Piaggio,Piaggio,Piaggio,Piaggio",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/picasa.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/picasa.png",
      "options": "Picasa,Picasa,Picasa,Picasa",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/playstation.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/playstation.png",
      "options": "Playstation,Playstation,Playstation,Playstation",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/pringles.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/pringles.png",
      "options": "Pringles,Pringles,Pringles,Pringles",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/redhat.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/redhat.png",
      "options": "Redhat,Redhat,Redhat,Redhat",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/reebok.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/reebok.png",
      "options": "Reebok,Reebok,Reebok,Reebok",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/rss.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/rss.png",
      "options": "Rss,Rss,Rss,Rss",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/safeway.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/safeway.png",
      "options": "Safeway,Safeway,Safeway,Safeway",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/samsung.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/samsung.png",
      "options": "Samsung,Samsung,Samsung,Samsung",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/sandisk.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/sandisk.png",
      "options": "Sandisk,Sandisk,Sandisk,Sandisk",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/skype.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/skype.png",
      "options": "Skype,Skype,Skype,Skype",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/sonic.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/sonic.png",
      "options": "Sonic,Sonic,Sonic,Sonic",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/spiderman.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/spiderman.png",
      "options": "Spiderman,Spiderman,Spiderman,Spiderman",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/sun.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/sun.png",
      "options": "Sun,Sun,Sun,Sun",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/superman.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/superman.png",
      "options": "Superman,Superman,Superman,Superman",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/super_mario.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/super_mario.png",
      "options": "Super mario,Super mario,Super mario,Super mario",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/swatch.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/swatch.png",
      "options": "Swatch,Swatch,Swatch,Swatch",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/symantec.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/symantec.png",
      "options": "Symantec,Symantec,Symantec,Symantec",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/target.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/target.png",
      "options": "Target,Target,Target,Target",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/tata.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/tata.png",
      "options": "Tata,Tata,Tata,Tata",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/tdk.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/tdk.png",
      "options": "Tdk,Tdk,Tdk,Tdk",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/the_pirate_bay.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/the_pirate_bay.png",
      "options": "The pirate bay,The pirate bay,The pirate bay,The pirate bay",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/uefa.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/uefa.png",
      "options": "Uefa,Uefa,Uefa,Uefa",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/ups.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/ups.png",
      "options": "Ups,Ups,Ups,Ups",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/versace.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/versace.png",
      "options": "Versace,Versace,Versace,Versace",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/vodafone.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/vodafone.png",
      "options": "Vodafone,Vodafone,Vodafone,Vodafone",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/walkman.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/walkman.png",
      "options": "Walkman,Walkman,Walkman,Walkman",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/walt_disney.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/walt_disney.png",
      "options": "Walt disney,Walt disney,Walt disney,Walt disney",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/wella.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/wella.png",
      "options": "Wella,Wella,Wella,Wella",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/wrigleys.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/wrigleys.png",
      "options": "Wrigleys,Wrigleys,Wrigleys,Wrigleys",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/xbox.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/xbox.png",
      "options": "Xbox,Xbox,Xbox,Xbox",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images1/yale.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images1/yale.png",
      "options": "Yale,Yale,Yale,Yale",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/airbus.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/airbus.png",
      "options": "Airbus,Airbus,Airbus,Airbus",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/altavista.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/altavista.png",
      "options": "Altavista,Altavista,Altavista,Altavista",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/amazon.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/amazon.png",
      "options": "Amazon,Amazon,Amazon,Amazon",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/american_express.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/american_express.png",
      "options": "American express,American express,American express,American express",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/batman.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/batman.png",
      "options": "Batman,Batman,Batman,Batman",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/blackberry.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/blackberry.png",
      "options": "Blackberry,Blackberry,Blackberry,Blackberry",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/boieng.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/boieng.png",
      "options": "Boieng,Boieng,Boieng,Boieng",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/budweiser.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/budweiser.png",
      "options": "Budweiser,Budweiser,Budweiser,Budweiser",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car7.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car7.png",
      "options": "Ford,Ford,Ford,Ford",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/castle_rock.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/castle_rock.png",
      "options": "Castle rock,Castle rock,Castle rock,Castle rock",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/citibank.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/citibank.png",
      "options": "Citibank,Citibank,Citibank,Citibank",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp11.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp11.png",
      "options": "Oracle,Oracle,Oracle,Oracle",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp12.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp12.png",
      "options": "Apache Tomcat,Apache Tomcat,Apache Tomcat,Apache Tomcat",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp13.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp13.png",
      "options": "VMware,VMware,VMware,VMware",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp14.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp14.png",
      "options": "McAfee,McAfee,McAfee,McAfee",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/comp15.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/comp15.png",
      "options": "VLC,VLC,VLC,VLC",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/danone.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/danone.png",
      "options": "Danone,Danone,Danone,Danone",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/diadora.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/diadora.png",
      "options": "Diadora,Diadora,Diadora,Diadora",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/dro.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/dro.png",
      "options": "Dropbox,Dropbox,Dropbox,Dropbox",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/emc.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/emc.png",
      "options": "Emc,Emc,Emc,Emc",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/estee_lauder.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/estee_lauder.png",
      "options": "Estee lauder,Estee lauder,Estee lauder,Estee lauder",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/fable.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/fable.png",
      "options": "Fable,Fable,Fable,Fable",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/formula1.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/formula1.png",
      "options": "Formula1,Formula1,Formula1,Formula1",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/gazprom.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/gazprom.png",
      "options": "Gazprom,Gazprom,Gazprom,Gazprom",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/gears_of_war.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/gears_of_war.png",
      "options": "Gears of war,Gears of war,Gears of war,Gears of war",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/gerber.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/gerber.png",
      "options": "Gerber,Gerber,Gerber,Gerber",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/giorgio_armani.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/giorgio_armani.png",
      "options": "Giorgio armani,Giorgio armani,Giorgio armani,Giorgio armani",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/google.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/google.png",
      "options": "Google,Google,Google,Google",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/gran_turismo.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/gran_turismo.png",
      "options": "Gran turismo,Gran turismo,Gran turismo,Gran turismo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/green_giant.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/green_giant.png",
      "options": "Green giant,Green giant,Green giant,Green giant",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/gucci.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/gucci.png",
      "options": "Gucci,Gucci,Gucci,Gucci",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/guinness.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/guinness.png",
      "options": "Guinness,Guinness,Guinness,Guinness",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/harvard.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/harvard.png",
      "options": "Harvard,Harvard,Harvard,Harvard",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/hello_kitty.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/hello_kitty.png",
      "options": "Hello kitty,Hello kitty,Hello kitty,Hello kitty",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/hennessy.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/hennessy.png",
      "options": "Hennessy,Hennessy,Hennessy,Hennessy",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/huawei.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/huawei.png",
      "options": "Huawei,Huawei,Huawei,Huawei",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/ing.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/ing.png",
      "options": "Ing,Ing,Ing,Ing",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/john_deere.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/john_deere.png",
      "options": "John deere,John deere,John deere,John deere",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/jpmorgan.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/jpmorgan.png",
      "options": "Jpmorgan,Jpmorgan,Jpmorgan,Jpmorgan",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/kelvinator.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/kelvinator.png",
      "options": "Kelvinator,Kelvinator,Kelvinator,Kelvinator",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/kfc.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/kfc.png",
      "options": "Kfc,Kfc,Kfc,Kfc",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/kleenex.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/kleenex.png",
      "options": "Kleenex,Kleenex,Kleenex,Kleenex",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/lockheed_martin.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/lockheed_martin.png",
      "options": "Lockheed martin,Lockheed martin,Lockheed martin,Lockheed martin",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/mass_effect.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/mass_effect.png",
      "options": "Mass effect,Mass effect,Mass effect,Mass effect",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/mercedes_benz.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/mercedes_benz.png",
      "options": "Mercedes benz,Mercedes benz,Mercedes benz,Mercedes benz",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/mortal_kombat.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/mortal_kombat.png",
      "options": "Mortal kombat,Mortal kombat,Mortal kombat,Mortal kombat",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/motorola.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/motorola.png",
      "options": "Motorola,Motorola,Motorola,Motorola",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/nasdaq.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/nasdaq.png",
      "options": "Nasdaq,Nasdaq,Nasdaq,Nasdaq",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/nba.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/nba.png",
      "options": "Nba,Nba,Nba,Nba",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/nbc.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/nbc.png",
      "options": "Nbc,Nbc,Nbc,Nbc",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/nike.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/nike.png",
      "options": "Nike,Nike,Nike,Nike",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/quicksilver.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/quicksilver.png",
      "options": "Quicksilver,Quicksilver,Quicksilver,Quicksilver",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/rolex.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/rolex.png",
      "options": "Rolex,Rolex,Rolex,Rolex",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/roxy.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/roxy.png",
      "options": "Roxy,Roxy,Roxy,Roxy",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/royal_canin.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/royal_canin.png",
      "options": "Royal canin,Royal canin,Royal canin,Royal canin",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/solidworks.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/solidworks.png",
      "options": "Solidworks,Solidworks,Solidworks,Solidworks",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/swarovski.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/swarovski.png",
      "options": "Swarovski,Swarovski,Swarovski,Swarovski",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/toblerone.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/toblerone.png",
      "options": "Toblerone,Toblerone,Toblerone,Toblerone",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/ubs.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/ubs.png",
      "options": "Ubs,Ubs,Ubs,Ubs",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/unilever.jpg",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/unilever.jpg",
      "options": "Unilever.jpg,Unilever.jpg,Unilever.jpg,Unilever.jpg",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images2/waze.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images2/waze.png",
      "options": "Waze,Waze,Waze,Waze",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/adidas.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/adidas.png",
      "options": "Adidas,Adidas,Adidas,Adidas",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/ae.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/ae.png",
      "options": "Ae,Ae,Ae,Ae",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/air_jordan.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/air_jordan.png",
      "options": "Air jordan,Air jordan,Air jordan,Air jordan",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/amtrak.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/amtrak.png",
      "options": "Amtrak,Amtrak,Amtrak,Amtrak",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/bluet.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/bluet.png",
      "options": "Bluetooth,Bluetooth,Bluetooth,Bluetooth",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car11.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car11.png",
      "options": "Peugeot,Peugeot,Peugeot,Peugeot",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car12.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car12.png",
      "options": "Å koda,Å koda,Å koda,Å koda",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car13.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car13.png",
      "options": "Volvo,Volvo,Volvo,Volvo",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car14.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car14.png",
      "options": "Daihatsu,Daihatsu,Daihatsu,Daihatsu",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car15.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car15.png",
      "options": "Lada,Lada,Lada,Lada",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car16.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car16.png",
      "options": "Kamaz,Kamaz,Kamaz,Kamaz",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car17.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car17.png",
      "options": "Jaguar,Jaguar,Jaguar,Jaguar",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car18.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car18.png",
      "options": "Land Rover,Land Rover,Land Rover,Land Rover",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car19.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car19.png",
      "options": "Lotus,Lotus,Lotus,Lotus",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/car20.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/car20.png",
      "options": "Bentley,Bentley,Bentley,Bentley",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/chevron.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/chevron.png",
      "options": "Chevron,Chevron,Chevron,Chevron",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/conv.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/conv.png",
      "options": "Converse,Converse,Converse,Converse",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/dolby.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/dolby.png",
      "options": "Dolby Digital,Dolby Digital,Dolby Digital,Dolby Digital",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/dove.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/dove.png",
      "options": "Dove,Dove,Dove,Dove",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/durex.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/durex.png",
      "options": "Durex,Durex,Durex,Durex",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/fbi.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/fbi.png",
      "options": "Fbi,Fbi,Fbi,Fbi",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/fedex.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/fedex.png",
      "options": "Fedex,Fedex,Fedex,Fedex",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/fila.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/fila.png",
      "options": "Fila,Fila,Fila,Fila",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/fuj.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/fuj.png",
      "options": "Fujitsu,Fujitsu,Fujitsu,Fujitsu",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/green_lantern.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/green_lantern.png",
      "options": "Green lantern,Green lantern,Green lantern,Green lantern",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/hilton.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/hilton.png",
      "options": "Hilton,Hilton,Hilton,Hilton",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/lego.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/lego.png",
      "options": "Lego,Lego,Lego,Lego",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/louis_vuitton.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/louis_vuitton.png",
      "options": "Louis vuitton,Louis vuitton,Louis vuitton,Louis vuitton",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/luft.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/luft.png",
      "options": "Lufthansa,Lufthansa,Lufthansa,Lufthansa",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/marines.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/marines.png",
      "options": "Marines,Marines,Marines,Marines",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/master.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/master.png",
      "options": "Master card,Master card,Master card,Master card",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/merrill_lynch.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/merrill_lynch.png",
      "options": "Merrill lynch,Merrill lynch,Merrill lynch,Merrill lynch",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/natgeo.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/natgeo.png",
      "options": "National Geographics,National Geographics,National Geographics,National Geographics",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/nato.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/nato.png",
      "options": "Nato,Nato,Nato,Nato",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/nb.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/nb.png",
      "options": "Nb,Nb,Nb,Nb",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/new_line_cinema.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/new_line_cinema.png",
      "options": "New line cinema,New line cinema,New line cinema,New line cinema",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/openstack.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/openstack.png",
      "options": "Openstack,Openstack,Openstack,Openstack",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/pampers.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/pampers.png",
      "options": "Pampers,Pampers,Pampers,Pampers",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/phs.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/phs.png",
      "options": "Phs,Phs,Phs,Phs",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/puma.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/puma.png",
      "options": "Puma,Puma,Puma,Puma",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/pzr.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/pzr.png",
      "options": "Pzr,Pzr,Pzr,Pzr",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/recycle.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/recycle.png",
      "options": "Recycle,Recycle,Recycle,Recycle",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/reuters.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/reuters.png",
      "options": "Reuters,Reuters,Reuters,Reuters",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/rolling_stones.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/rolling_stones.png",
      "options": "Rolling stones,Rolling stones,Rolling stones,Rolling stones",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/sesame.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/sesame.png",
      "options": "Sesame,Sesame,Sesame,Sesame",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/speed.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/speed.png",
      "options": "Speed,Speed,Speed,Speed",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/taco.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/taco.png",
      "options": "Taco Bell,Taco Bell,Taco Bell,Taco Bell",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/tmd.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/tmd.png",
      "options": "Tmd,Tmd,Tmd,Tmd",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/visa.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/visa.png",
      "options": "Visa,Visa,Visa,Visa",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/wal.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/wal.png",
      "options": "Walmart,Walmart,Walmart,Walmart",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/warner.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/warner.png",
      "options": "Warner,Warner,Warner,Warner",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/whirlpool.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/whirlpool.png",
      "options": "Whirlpool,Whirlpool,Whirlpool,Whirlpool",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/xerox.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/xerox.png",
      "options": "Xerox,Xerox,Xerox,Xerox",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images3/yma.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images3/yma.png",
      "options": "Yamaha,Yamaha,Yamaha,Yamaha",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/acdsee.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/acdsee.png",
      "options": "Acdsee,Acdsee,Acdsee,Acdsee",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/adio.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/adio.png",
      "options": "Adio,Adio,Adio,Adio",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/air_canada.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/air_canada.png",
      "options": "Air canada,Air canada,Air canada,Air canada",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/all_nippon_airways.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/all_nippon_airways.png",
      "options": "All nippon airways,All nippon airways,All nippon airways,All nippon airways",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/american_airlines.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/american_airlines.png",
      "options": "American airlines,American airlines,American airlines,American airlines",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/aol.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/aol.png",
      "options": "Aol,Aol,Aol,Aol",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/austrian_airlines.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/austrian_airlines.png",
      "options": "Austrian airlines,Austrian airlines,Austrian airlines,Austrian airlines",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/bad_robot.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/bad_robot.png",
      "options": "Bad robot,Bad robot,Bad robot,Bad robot",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/best_buy.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/best_buy.png",
      "options": "Best buy,Best buy,Best buy,Best buy",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/bic.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/bic.png",
      "options": "Bic,Bic,Bic,Bic",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/billabong.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/billabong.png",
      "options": "Billabong,Billabong,Billabong,Billabong",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/bit.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/bit.png",
      "options": "BitTorrent,BitTorrent,BitTorrent,BitTorrent",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/boc.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/boc.png",
      "options": "Bank of China,Bank of China,Bank of China,Bank of China",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/boston_red_sox.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/boston_red_sox.png",
      "options": "Boston Red Sox,Boston Red Sox,Boston Red Sox,Boston Red Sox",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/cathay_pacific.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/cathay_pacific.png",
      "options": "Cathay pacific,Cathay pacific,Cathay pacific,Cathay pacific",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/china_mobile.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/china_mobile.png",
      "options": "China mobile,China mobile,China mobile,China mobile",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/china_southern.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/china_southern.png",
      "options": "China southern,China southern,China southern,China southern",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/cisco.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/cisco.png",
      "options": "Cisco,Cisco,Cisco,Cisco",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/cnet.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/cnet.png",
      "options": "Cnet,Cnet,Cnet,Cnet",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/commodore.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/commodore.png",
      "options": "Commodore,Commodore,Commodore,Commodore",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/compaq.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/compaq.png",
      "options": "Compaq,Compaq,Compaq,Compaq",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/coors.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/coors.png",
      "options": "Coors,Coors,Coors,Coors",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/dickies.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/dickies.png",
      "options": "Dickies,Dickies,Dickies,Dickies",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/diesel.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/diesel.png",
      "options": "Diesel,Diesel,Diesel,Diesel",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/dominos_pizza.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/dominos_pizza.png",
      "options": "Dominos pizza,Dominos pizza,Dominos pizza,Dominos pizza",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/earthlink.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/earthlink.png",
      "options": "Earthlink,Earthlink,Earthlink,Earthlink",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/epson.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/epson.png",
      "options": "Epson,Epson,Epson,Epson",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/fruit_of_the_loom.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/fruit_of_the_loom.png",
      "options": "Fruit of the loom,Fruit of the loom,Fruit of the loom,Fruit of the loom",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/general_electric.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/general_electric.png",
      "options": "General electric,General electric,General electric,General electric",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/genius.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/genius.png",
      "options": "Genius,Genius,Genius,Genius",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/glaxoSmithKline.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/glaxoSmithKline.png",
      "options": "GlaxoSmithKline,GlaxoSmithKline,GlaxoSmithKline,GlaxoSmithKline",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/greyhound.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/greyhound.png",
      "options": "Greyhound,Greyhound,Greyhound,Greyhound",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/gulf_air.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/gulf_air.png",
      "options": "Gulf air,Gulf air,Gulf air,Gulf air",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/half_life.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/half_life.png",
      "options": "Half life,Half life,Half life,Half life",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/hermes.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/hermes.png",
      "options": "Hermes,Hermes,Hermes,Hermes",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/hi_tec.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/hi_tec.png",
      "options": "Hi tec,Hi tec,Hi tec,Hi tec",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/hooters.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/hooters.png",
      "options": "Hooters,Hooters,Hooters,Hooters",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/hsbc.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/hsbc.png",
      "options": "Hsbc,Hsbc,Hsbc,Hsbc",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/icq.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/icq.png",
      "options": "Icq,Icq,Icq,Icq",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/joma.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/joma.png",
      "options": "Joma,Joma,Joma,Joma",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/kappa.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/kappa.png",
      "options": "Kappa,Kappa,Kappa,Kappa",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/kawasaki.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/kawasaki.png",
      "options": "Kawasaki,Kawasaki,Kawasaki,Kawasaki",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/kodak.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/kodak.png",
      "options": "Kodak,Kodak,Kodak,Kodak",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/kraft_foods.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/kraft_foods.png",
      "options": "Kraft foods,Kraft foods,Kraft foods,Kraft foods",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/kyocera.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/kyocera.png",
      "options": "Kyocera,Kyocera,Kyocera,Kyocera",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/lacoste.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/lacoste.png",
      "options": "Lacoste,Lacoste,Lacoste,Lacoste",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/lenovo.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/lenovo.png",
      "options": "Lenovo,Lenovo,Lenovo,Lenovo",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/malaysia_airlines.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/malaysia_airlines.png",
      "options": "Malaysia airlines,Malaysia airlines,Malaysia airlines,Malaysia airlines",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/michelin.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/michelin.png",
      "options": "Michelin,Michelin,Michelin,Michelin",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/morgan.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/morgan.png",
      "options": "Morgan,Morgan,Morgan,Morgan",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/nfl.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/nfl.png",
      "options": "Nfl,Nfl,Nfl,Nfl",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/nickelodeon.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/nickelodeon.png",
      "options": "Nickelodeon,Nickelodeon,Nickelodeon,Nickelodeon",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/novartis.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/novartis.png",
      "options": "Novartis,Novartis,Novartis,Novartis",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/oakley.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/oakley.png",
      "options": "Oakley,Oakley,Oakley,Oakley",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/petrochina.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/petrochina.png",
      "options": "Petrochina,Petrochina,Petrochina,Petrochina",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/pilot.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/pilot.png",
      "options": "Pilot,Pilot,Pilot,Pilot",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/polo.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/polo.png",
      "options": "Polo,Polo,Polo,Polo",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/repsol.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/repsol.png",
      "options": "Repsol,Repsol,Repsol,Repsol",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/rip_curl.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/rip_curl.png",
      "options": "Rip curl,Rip curl,Rip curl,Rip curl",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/saturn.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/saturn.png",
      "options": "Saturn,Saturn,Saturn,Saturn",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/saucony.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/saucony.png",
      "options": "Saucony,Saucony,Saucony,Saucony",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/shell.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/shell.png",
      "options": "Shell,Shell,Shell,Shell",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/singapore_airlines.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/singapore_airlines.png",
      "options": "Singapore airlines,Singapore airlines,Singapore airlines,Singapore airlines",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/slazenger.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/slazenger.png",
      "options": "Slazenger,Slazenger,Slazenger,Slazenger",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/sony_ericsson.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/sony_ericsson.png",
      "options": "Sony ericsson,Sony ericsson,Sony ericsson,Sony ericsson",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/south_african.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/south_african.png",
      "options": "South african,South african,South african,South african",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/sprint.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/sprint.png",
      "options": "Sprint,Sprint,Sprint,Sprint",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/staedtler.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/staedtler.png",
      "options": "Staedtler,Staedtler,Staedtler,Staedtler",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/starbucks.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/starbucks.png",
      "options": "Starbucks,Starbucks,Starbucks,Starbucks",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/steam.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/steam.png",
      "options": "Steam,Steam,Steam,Steam",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/tama.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/tama.png",
      "options": "Tama,Tama,Tama,Tama",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/texaco.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/texaco.png",
      "options": "Texaco,Texaco,Texaco,Texaco",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/ubisoft.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/ubisoft.png",
      "options": "Ubisoft,Ubisoft,Ubisoft,Ubisoft",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/umbro.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/umbro.png",
      "options": "Umbro,Umbro,Umbro,Umbro",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/usps.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/usps.png",
      "options": "Usps,Usps,Usps,Usps",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/us_airways.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/us_airways.png",
      "options": "Us airways,Us airways,Us airways,Us airways",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/utor.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/utor.png",
      "options": "Utor,Utor,Utor,Utor",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/vauxhall.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/vauxhall.png",
      "options": "Vauxhall,Vauxhall,Vauxhall,Vauxhall",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/whiskas.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/whiskas.png",
      "options": "Whiskas,Whiskas,Whiskas,Whiskas",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images4/zippo.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images4/zippo.png",
      "options": "Zippo,Zippo,Zippo,Zippo",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/amd.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/amd.png",
      "options": "Amd,Amd,Amd,Amd",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/apache.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/apache.png",
      "options": "Apache,Apache,Apache,Apache",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/atari.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/atari.png",
      "options": "Atari,Atari,Atari,Atari",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/avery.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/avery.png",
      "options": "Avery,Avery,Avery,Avery",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/AVIS.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/AVIS.png",
      "options": "AVIS,AVIS,AVIS,AVIS",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/barclays.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/barclays.png",
      "options": "Barclays,Barclays,Barclays,Barclays",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/BEST_WESTERN.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/BEST_WESTERN.png",
      "options": "BEST WESTERN,BEST WESTERN,BEST WESTERN,BEST WESTERN",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/braun.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/braun.png",
      "options": "Braun,Braun,Braun,Braun",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/burberry.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/burberry.png",
      "options": "Burberry,Burberry,Burberry,Burberry",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/cadbury.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/cadbury.png",
      "options": "Cadbury,Cadbury,Cadbury,Cadbury",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/CAPCOM.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/CAPCOM.png",
      "options": "CAPCOM,CAPCOM,CAPCOM,CAPCOM",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/caribou.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/caribou.png",
      "options": "Caribou,Caribou,Caribou,Caribou",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/carrefour.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/carrefour.png",
      "options": "Carrefour,Carrefour,Carrefour,Carrefour",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/CARTOON_NETWORK.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/CARTOON_NETWORK.png",
      "options": "CARTOON NETWORK,CARTOON NETWORK,CARTOON NETWORK,CARTOON NETWORK",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/chanel.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/chanel.png",
      "options": "Chanel,Chanel,Chanel,Chanel",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/circuit_city.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/circuit_city.png",
      "options": "Circuit city,Circuit city,Circuit city,Circuit city",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/DAKAR_RALLY.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/DAKAR_RALLY.png",
      "options": "DAKAR RALLY,DAKAR RALLY,DAKAR RALLY,DAKAR RALLY",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/DELOITTE.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/DELOITTE.png",
      "options": "DELOITTE,DELOITTE,DELOITTE,DELOITTE",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/drupal.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/drupal.png",
      "options": "Drupal,Drupal,Drupal,Drupal",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/dunlop.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/dunlop.png",
      "options": "Dunlop,Dunlop,Dunlop,Dunlop",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/duracell.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/duracell.png",
      "options": "Duracell,Duracell,Duracell,Duracell",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/eharmony.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/eharmony.png",
      "options": "Eharmony,Eharmony,Eharmony,Eharmony",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/electrolux.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/electrolux.png",
      "options": "Electrolux,Electrolux,Electrolux,Electrolux",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/energizer.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/energizer.png",
      "options": "Energizer,Energizer,Energizer,Energizer",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/evian.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/evian.png",
      "options": "Evian,Evian,Evian,Evian",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/express.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/express.png",
      "options": "Express,Express,Express,Express",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/FABER_CASTELL.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/FABER_CASTELL.png",
      "options": "FABER CASTELL,FABER CASTELL,FABER CASTELL,FABER CASTELL",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/ferrero_rocher.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/ferrero_rocher.png",
      "options": "Ferrero rocher,Ferrero rocher,Ferrero rocher,Ferrero rocher",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/galaxy.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/galaxy.png",
      "options": "Galaxy,Galaxy,Galaxy,Galaxy",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/gap.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/gap.png",
      "options": "Gap,Gap,Gap,Gap",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/ghirardelli.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/ghirardelli.png",
      "options": "Ghirardelli,Ghirardelli,Ghirardelli,Ghirardelli",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/GHOSTBUSTERS.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/GHOSTBUSTERS.png",
      "options": "GHOSTBUSTERS,GHOSTBUSTERS,GHOSTBUSTERS,GHOSTBUSTERS",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/gillette.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/gillette.png",
      "options": "Gillette,Gillette,Gillette,Gillette",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/go_daddy.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/go_daddy.png",
      "options": "Go daddy,Go daddy,Go daddy,Go daddy",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/guylian.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/guylian.png",
      "options": "Guylian,Guylian,Guylian,Guylian",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/harley_davidson.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/harley_davidson.png",
      "options": "Harley davidson,Harley davidson,Harley davidson,Harley davidson",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/hellmanns.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/hellmanns.png",
      "options": "Hellmanns,Hellmanns,Hellmanns,Hellmanns",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/IRONMAN.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/IRONMAN.png",
      "options": "IRONMAN,IRONMAN,IRONMAN,IRONMAN",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/johnson_controls.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/johnson_controls.png",
      "options": "Johnson controls,Johnson controls,Johnson controls,Johnson controls",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/kaspersky.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/kaspersky.png",
      "options": "Kaspersky,Kaspersky,Kaspersky,Kaspersky",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/kitkat.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/kitkat.png",
      "options": "Kitkat,Kitkat,Kitkat,Kitkat",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/konica_minolta.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/konica_minolta.png",
      "options": "Konica minolta,Konica minolta,Konica minolta,Konica minolta",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/mars.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/mars.png",
      "options": "Mars,Mars,Mars,Mars",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/matrix.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/matrix.png",
      "options": "Matrix,Matrix,Matrix,Matrix",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/MONOPOLY.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/MONOPOLY.png",
      "options": "MONOPOLY,MONOPOLY,MONOPOLY,MONOPOLY",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/myspace.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/myspace.png",
      "options": "Myspace,Myspace,Myspace,Myspace",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/nintendo.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/nintendo.png",
      "options": "Nintendo,Nintendo,Nintendo,Nintendo",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/nokia.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/nokia.png",
      "options": "Nokia,Nokia,Nokia,Nokia",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/ORBIT.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/ORBIT.png",
      "options": "ORBIT,ORBIT,ORBIT,ORBIT",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/OXFAM.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/OXFAM.png",
      "options": "OXFAM,OXFAM,OXFAM,OXFAM",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/OXFORD.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/OXFORD.png",
      "options": "OXFORD,OXFORD,OXFORD,OXFORD",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/panasonic.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/panasonic.png",
      "options": "Panasonic,Panasonic,Panasonic,Panasonic",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/patchi.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/patchi.png",
      "options": "Patchi,Patchi,Patchi,Patchi",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/PAYPAL.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/PAYPAL.png",
      "options": "PAYPAL,PAYPAL,PAYPAL,PAYPAL",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/PLAYMOBIL.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/PLAYMOBIL.png",
      "options": "PLAYMOBIL,PLAYMOBIL,PLAYMOBIL,PLAYMOBIL",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/ROCKSTAR.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/ROCKSTAR.png",
      "options": "ROCKSTAR,ROCKSTAR,ROCKSTAR,ROCKSTAR",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/STANFORD.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/STANFORD.png",
      "options": "STANFORD,STANFORD,STANFORD,STANFORD",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/tommy_hilfiger.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/tommy_hilfiger.png",
      "options": "Tommy hilfiger,Tommy hilfiger,Tommy hilfiger,Tommy hilfiger",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/true_religion.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/true_religion.png",
      "options": "True religion,True religion,True religion,True religion",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/UGG.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/UGG.png",
      "options": "UGG,UGG,UGG,UGG",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/WESTERN_DIGITAL.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/WESTERN_DIGITAL.png",
      "options": "WESTERN DIGITAL,WESTERN DIGITAL,WESTERN DIGITAL,WESTERN DIGITAL",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images5/WESTERN_UNION.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images5/WESTERN_UNION.png",
      "options": "WESTERN UNION,WESTERN UNION,WESTERN UNION,WESTERN UNION",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/abnamro.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/abnamro.png",
      "options": "Abnamro,Abnamro,Abnamro,Abnamro",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/akzonobel.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/akzonobel.png",
      "options": "Akzonobel,Akzonobel,Akzonobel,Akzonobel",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/allianz.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/allianz.png",
      "options": "Allianz,Allianz,Allianz,Allianz",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/asics.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/asics.png",
      "options": "Asics,Asics,Asics,Asics",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/benetton.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/benetton.png",
      "options": "Benetton,Benetton,Benetton,Benetton",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/bodyshop.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/bodyshop.png",
      "options": "Bodyshop,Bodyshop,Bodyshop,Bodyshop",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/bridgestone.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/bridgestone.png",
      "options": "Bridgestone,Bridgestone,Bridgestone,Bridgestone",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/burton.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/burton.png",
      "options": "Burton,Burton,Burton,Burton",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/champion.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/champion.png",
      "options": "Champion,Champion,Champion,Champion",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/championsleague.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/championsleague.png",
      "options": "Championsleague,Championsleague,Championsleague,Championsleague",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/cirrus.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/cirrus.png",
      "options": "Cirrus,Cirrus,Cirrus,Cirrus",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/crocs.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/crocs.png",
      "options": "Crocs,Crocs,Crocs,Crocs",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/deltaairlines.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/deltaairlines.png",
      "options": "Deltaairlines,Deltaairlines,Deltaairlines,Deltaairlines",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/discovery.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/discovery.png",
      "options": "Discovery,Discovery,Discovery,Discovery",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/dole.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/dole.png",
      "options": "Dole,Dole,Dole,Dole",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/dreamworks.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/dreamworks.png",
      "options": "Dreamworks,Dreamworks,Dreamworks,Dreamworks",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/dunkindonuts.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/dunkindonuts.png",
      "options": "Dunkindonuts,Dunkindonuts,Dunkindonuts,Dunkindonuts",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/emirates.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/emirates.png",
      "options": "Emirates,Emirates,Emirates,Emirates",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/enron.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/enron.png",
      "options": "Enron,Enron,Enron,Enron",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/eurosport.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/eurosport.png",
      "options": "Eurosport,Eurosport,Eurosport,Eurosport",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/fendi.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/fendi.png",
      "options": "Fendi,Fendi,Fendi,Fendi",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/firebird.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/firebird.png",
      "options": "Firebird,Firebird,Firebird,Firebird",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/firestone.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/firestone.png",
      "options": "Firestone,Firestone,Firestone,Firestone",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/gatorade.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/gatorade.png",
      "options": "Gatorade,Gatorade,Gatorade,Gatorade",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/holidayinn.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/holidayinn.png",
      "options": "Holidayinn,Holidayinn,Holidayinn,Holidayinn",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/hotwheels.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/hotwheels.png",
      "options": "Hotwheels,Hotwheels,Hotwheels,Hotwheels",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/infinity.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/infinity.png",
      "options": "Infinity,Infinity,Infinity,Infinity",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/kenwood.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/kenwood.png",
      "options": "Kenwood,Kenwood,Kenwood,Kenwood",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/lays.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/lays.png",
      "options": "Lays,Lays,Lays,Lays",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/linkinpark.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/linkinpark.png",
      "options": "Linkinpark,Linkinpark,Linkinpark,Linkinpark",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/lotto.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/lotto.png",
      "options": "Lotto,Lotto,Lotto,Lotto",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/lucent.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/lucent.png",
      "options": "Lucent,Lucent,Lucent,Lucent",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/malibu.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/malibu.png",
      "options": "Malibu,Malibu,Malibu,Malibu",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/mattel.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/mattel.png",
      "options": "Mattel,Mattel,Mattel,Mattel",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/minecraft.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/minecraft.png",
      "options": "Minecraft,Minecraft,Minecraft,Minecraft",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/mozilla.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/mozilla.png",
      "options": "Mozilla,Mozilla,Mozilla,Mozilla",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/nandos.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/nandos.png",
      "options": "Nandos,Nandos,Nandos,Nandos",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/ncr.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/ncr.png",
      "options": "Ncr,Ncr,Ncr,Ncr",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/nespresso.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/nespresso.png",
      "options": "Nespresso,Nespresso,Nespresso,Nespresso",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/nikon.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/nikon.png",
      "options": "Nikon,Nikon,Nikon,Nikon",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/nortel.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/nortel.png",
      "options": "Nortel,Nortel,Nortel,Nortel",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/northface.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/northface.png",
      "options": "Northface,Northface,Northface,Northface",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/panam.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/panam.png",
      "options": "Panam,Panam,Panam,Panam",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/pearljam.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/pearljam.png",
      "options": "Pearljam,Pearljam,Pearljam,Pearljam",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/pelikan.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/pelikan.png",
      "options": "Pelikan,Pelikan,Pelikan,Pelikan",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/penguin.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/penguin.png",
      "options": "Penguin,Penguin,Penguin,Penguin",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/quicktime.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/quicktime.png",
      "options": "Quicktime,Quicktime,Quicktime,Quicktime",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/ramones.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/ramones.png",
      "options": "Ramones,Ramones,Ramones,Ramones",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/seat.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/seat.png",
      "options": "Seat,Seat,Seat,Seat",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/sheraton.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/sheraton.png",
      "options": "Sheraton,Sheraton,Sheraton,Sheraton",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/spar.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/spar.png",
      "options": "Spar,Spar,Spar,Spar",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/tagheuer.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/tagheuer.png",
      "options": "Tagheuer,Tagheuer,Tagheuer,Tagheuer",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/thai.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/thai.png",
      "options": "Thai,Thai,Thai,Thai",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/tissot.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/tissot.png",
      "options": "Tissot,Tissot,Tissot,Tissot",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/tomtom.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/tomtom.png",
      "options": "Tomtom,Tomtom,Tomtom,Tomtom",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/topgun.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/topgun.png",
      "options": "Topgun,Topgun,Topgun,Topgun",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/total.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/total.png",
      "options": "Total,Total,Total,Total",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/unicef.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/unicef.png",
      "options": "Unicef,Unicef,Unicef,Unicef",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/usb.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/usb.png",
      "options": "Usb,Usb,Usb,Usb",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/woolmark.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/woolmark.png",
      "options": "Woolmark,Woolmark,Woolmark,Woolmark",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/yahoo.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/yahoo.png",
      "options": "Yahoo,Yahoo,Yahoo,Yahoo",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/images6/yellowpages.png",
      "question": "https://logosquiz.net/data/logosquiz/images/images6/yellowpages.png",
      "options": "Yellowpages,Yellowpages,Yellowpages,Yellowpages",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport1.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport1.png",
      "options": "Chicago Bulls,Chicago Bulls,Chicago Bulls,Chicago Bulls",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport10.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport10.png",
      "options": "Phoenix Suns,Phoenix Suns,Phoenix Suns,Phoenix Suns",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport100.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport100.png",
      "options": "Arizona Cardinals,Arizona Cardinals,Arizona Cardinals,Arizona Cardinals",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport1000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport1000.png",
      "options": "Los Angeles Kings,Los Angeles Kings,Los Angeles Kings,Los Angeles Kings",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport10000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport10000.png",
      "options": "Juventus,Juventus,Juventus,Juventus",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport101.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport101.png",
      "options": "Indianapolis Colts,Indianapolis Colts,Indianapolis Colts,Indianapolis Colts",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport11.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport11.png",
      "options": "Calgary Flames,Calgary Flames,Calgary Flames,Calgary Flames",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport11000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport11000.png",
      "options": "A.S. Roma,A.S. Roma,A.S. Roma,A.S. Roma",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport12.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport12.png",
      "options": "Boston Bruins,Boston Bruins,Boston Bruins,Boston Bruins",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport12000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport12000.png",
      "options": "FC Bayern Munich,FC Bayern Munich,FC Bayern Munich,FC Bayern Munich",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport13.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport13.png",
      "options": "Florida Panthers,Florida Panthers,Florida Panthers,Florida Panthers",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport13000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport13000.png",
      "options": "S.S.C. Napoli,S.S.C. Napoli,S.S.C. Napoli,S.S.C. Napoli",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport14.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport14.png",
      "options": "Detroit Red Wings,Detroit Red Wings,Detroit Red Wings,Detroit Red Wings",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport14000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport14000.png",
      "options": "Benfica,Benfica,Benfica,Benfica",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport15.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport15.png",
      "options": "Nashville Predators,Nashville Predators,Nashville Predators,Nashville Predators",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport15000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport15000.png",
      "options": "Maccabi Haifa,Maccabi Haifa,Maccabi Haifa,Maccabi Haifa",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport2.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport2.png",
      "options": "Atlanta Hawks,Atlanta Hawks,Atlanta Hawks,Atlanta Hawks",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport200.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport200.png",
      "options": "Buffalo Bills,Buffalo Bills,Buffalo Bills,Buffalo Bills",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport2000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport2000.png",
      "options": "New York Rangers,New York Rangers,New York Rangers,New York Rangers",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport3.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport3.png",
      "options": "Pittsburgh Steelers,Pittsburgh Steelers,Pittsburgh Steelers,Pittsburgh Steelers",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport300.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport300.png",
      "options": "Carolina Panthers,Carolina Panthers,Carolina Panthers,Carolina Panthers",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport3000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport3000.png",
      "options": "Philadelphia Flyers,Philadelphia Flyers,Philadelphia Flyers,Philadelphia Flyers",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport4.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport4.png",
      "options": "Charlotte Bobcats,Charlotte Bobcats,Charlotte Bobcats,Charlotte Bobcats",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport400.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport400.png",
      "options": "Detroit Lions,Detroit Lions,Detroit Lions,Detroit Lions",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport4000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport4000.png",
      "options": "Vancouver Canucks,Vancouver Canucks,Vancouver Canucks,Vancouver Canucks",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport5.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport5.png",
      "options": "Cleveland Cavaliers,Cleveland Cavaliers,Cleveland Cavaliers,Cleveland Cavaliers",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport500.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport500.png",
      "options": "Houston Texans,Houston Texans,Houston Texans,Houston Texans",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport5000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport5000.png",
      "options": "Ottawa Senators,Ottawa Senators,Ottawa Senators,Ottawa Senators",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport6.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport6.png",
      "options": "Detroit Pistons,Detroit Pistons,Detroit Pistons,Detroit Pistons",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport600.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport600.png",
      "options": "Miami Dolphins,Miami Dolphins,Miami Dolphins,Miami Dolphins",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport6000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport6000.png",
      "options": "FC Barcelona,FC Barcelona,FC Barcelona,FC Barcelona",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport7.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport7.png",
      "options": "Los Angeles Lakers,Los Angeles Lakers,Los Angeles Lakers,Los Angeles Lakers",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport700.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport700.png",
      "options": "New York Giants,New York Giants,New York Giants,New York Giants",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport7000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport7000.png",
      "options": "Real Madrid,Real Madrid,Real Madrid,Real Madrid",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport8.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport8.png",
      "options": "Utah Jazz,Utah Jazz,Utah Jazz,Utah Jazz",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport800.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport800.png",
      "options": "Philadelphia Eagles,Philadelphia Eagles,Philadelphia Eagles,Philadelphia Eagles",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport8000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport8000.png",
      "options": "Chelsea,Chelsea,Chelsea,Chelsea",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport9.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport9.png",
      "options": "Milwaukee Bucks,Milwaukee Bucks,Milwaukee Bucks,Milwaukee Bucks",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport900.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport900.png",
      "options": "Chicago Bears,Chicago Bears,Chicago Bears,Chicago Bears",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/sport/sport9000.png",
      "question": "https://logosquiz.net/data/logosquiz/images/sport/sport9000.png",
      "options": "Arsenal,Arsenal,Arsenal,Arsenal",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Albania.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Albania.png",
      "options": "Albania,Albania,Albania,Albania",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Argentina.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Argentina.png",
      "options": "Argentina,Argentina,Argentina,Argentina",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Australia.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Australia.png",
      "options": "Australia,Australia,Australia,Australia",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Austria.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Austria.png",
      "options": "Austria,Austria,Austria,Austria",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Belgium.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Belgium.png",
      "options": "Belgium,Belgium,Belgium,Belgium",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Brazil.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Brazil.png",
      "options": "Brazil,Brazil,Brazil,Brazil",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Canada.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Canada.png",
      "options": "Canada,Canada,Canada,Canada",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/China.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/China.png",
      "options": "China,China,China,China",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Denmark.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Denmark.png",
      "options": "Denmark,Denmark,Denmark,Denmark",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Egypt.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Egypt.png",
      "options": "Egypt,Egypt,Egypt,Egypt",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Finland.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Finland.png",
      "options": "Finland,Finland,Finland,Finland",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/France.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/France.png",
      "options": "France,France,France,France",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Georgia.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Georgia.png",
      "options": "Georgia,Georgia,Georgia,Georgia",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Germany.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Germany.png",
      "options": "Germany,Germany,Germany,Germany",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Greece.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Greece.png",
      "options": "Greece,Greece,Greece,Greece",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Hungary.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Hungary.png",
      "options": "Hungary,Hungary,Hungary,Hungary",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Iceland.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Iceland.png",
      "options": "Iceland,Iceland,Iceland,Iceland",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/India.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/India.png",
      "options": "India,India,India,India",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Iran.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Iran.png",
      "options": "Iran,Iran,Iran,Iran",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Iraq.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Iraq.png",
      "options": "Iraq,Iraq,Iraq,Iraq",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Ireland.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Ireland.png",
      "options": "Ireland,Ireland,Ireland,Ireland",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Israel.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Israel.png",
      "options": "Israel,Israel,Israel,Israel",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Italy.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Italy.png",
      "options": "Italy,Italy,Italy,Italy",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Japan.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Japan.png",
      "options": "Japan,Japan,Japan,Japan",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Mexico.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Mexico.png",
      "options": "Mexico,Mexico,Mexico,Mexico",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Moldova.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Moldova.png",
      "options": "Moldova,Moldova,Moldova,Moldova",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Netherlands.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Netherlands.png",
      "options": "Netherlands,Netherlands,Netherlands,Netherlands",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/North_Korea.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/North_Korea.png",
      "options": "North Korea,North Korea,North Korea,North Korea",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Norway.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Norway.png",
      "options": "Norway,Norway,Norway,Norway",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Poland.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Poland.png",
      "options": "Poland,Poland,Poland,Poland",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Russia.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Russia.png",
      "options": "Russia,Russia,Russia,Russia",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/South_Korea.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/South_Korea.png",
      "options": "South Korea,South Korea,South Korea,South Korea",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Spain.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Spain.png",
      "options": "Spain,Spain,Spain,Spain",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Sweden.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Sweden.png",
      "options": "Sweden,Sweden,Sweden,Sweden",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Switzerland.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Switzerland.png",
      "options": "Switzerland,Switzerland,Switzerland,Switzerland",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Turkey.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Turkey.png",
      "options": "Turkey,Turkey,Turkey,Turkey",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Ukraine.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Ukraine.png",
      "options": "Ukraine,Ukraine,Ukraine,Ukraine",
      "correct_options": 1,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/United_Kingdom.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/United_Kingdom.png",
      "options": "United Kingdom,United Kingdom,United Kingdom,United Kingdom",
      "correct_options": 2,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/United_States.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/United_States.png",
      "options": "United States,United States,United States,United States",
      "correct_options": 3,
      "question_type": "2",
      "question_is_active": "1"
    },
    {
      "question_new": "https://logosquiz.net/data/logosquiz/images/flags/Vietnam.png",
      "question": "https://logosquiz.net/data/logosquiz/images/flags/Vietnam.png",
      "options": "Vietnam,Vietnam,Vietnam,Vietnam",
      "correct_options": 0,
      "question_type": "2",
      "question_is_active": "1"
    }
  ]
  let resss = await global.knexCon("m_questions").insert(newArray);
  res.send(resss)

}


module.exports.login = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["user_name"];
  let responseError = await CheckValidation(validateArray, reqbody);
  let globalSettings = await global.knexCon("settings");
  if (responseError.status) {
    global
      .knexCon("m_user")
      .where({
        user_name: req.body.user_name,
        user_type: "1",
        user_is_active: "1",
      })
      .orWhere({ uuid: req.body.user_name })
      .then((response) => {
        if (response.length > 0) {
          res.send({
            status: true,
            Record: response,
            msg: "Success",
            setting: globalSettings
          });
        } else {
          res.send({
            status: false,
            Record: response,
            msg: "Invalid Credential",
            setting: globalSettings
          });
        }
      })
      .catch((err) => {
        res.send({
          status: false,
          Record: err,
          setting: globalSettings
        });
      });
  } else {
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

const linkLevel = async (level_id_new, question_array) => {
  return new Promise(async (resolve, reject) => {
    let InsertQuestionLink_array = [];
    question_array.map((x) => {
      let obj = {
        level_id: level_id_new,
        question_id: x,
        level_q_is_active: "1",
      };
      InsertQuestionLink_array.push(obj);
    });
    let deleteAllQuestion = await global
      .knexCon("m_level_link_question")
      .where({ level_id: level_id_new })
      .del();

    let InsertAllLinkQuestion = await global
      .knexCon("m_level_link_question")
      .insert(InsertQuestionLink_array);
    return resolve({ status: true });
  });
};

module.exports.addEditGameLevelId = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["level", "game_id", "level_is_active"];
  let level_id_new = 0;

  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let obj = {
      level: reqbody.level,
      game_id: reqbody.game_id,
      level_is_active: reqbody.level_is_active,
      level_name: "Level " + reqbody.level,
    };

    if (reqbody.level_id) {
      global
        .knexCon("m_level")
        .update(obj)
        .where({ level_id: reqbody.level_id })
        .then((response) => {
          level_id_new = reqbody.level_id;
          if (reqbody.question_id.length > 0) {
            linkLevel(level_id_new, reqbody.question_id).then((response1) => {
              res.send({
                status: true,
                Record: obj,
                msg: "Updated Succesfully",
              });
            });
          } else {
            res.send({
              status: true,
              Record: obj,
              msg: "Updated Succesfully",
            });
          }
        })
        .catch((err) => {
          res.send({
            status: false,
            Record: err,
          });
        });
    } else {
      let check = await global.knexCon("m_level").where({
        level: reqbody.level,
        game_id: reqbody.game_id,
      });

      if (check.length > 0) {
        return res.send({
          status: false,
          Record: response,
          msg: "Already Exists",
        });
      }
      global
        .knexCon("m_level")
        .insert(obj)
        .then((response) => {
          if (response.length > 0) {
            level_id_new = response[0];
            obj["level_id"] = response[0];
            if (reqbody.question_array.length > 0) {
              linkLevel(level_id_new, reqbody.question_array).then(
                (response1) => {
                  res.send({
                    status: true,
                    Record: obj,
                    msg: "Inserted Succesfully",
                  });
                }
              );
            } else {
              return res.send({
                status: true,
                Record: obj,
                msg: "Inserted Succesfully",
              });
            }
          } else {
            return res.send({
              status: false,
              Record: response,
              msg: "something Went wrong",
            });
          }
        })
        .catch((err) => {
          console.log(err);

          return res.send({
            status: false,
            Record: err,
          });
        });
    }
  } else {
    return res.send(responseError);
  }
  // console.log("dsfdsf")
};

module.exports.getLevelList = async (req, res) => {
  let limit = req.query.limit ? req.query.limit : 1000;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;

  global
    .knexCon("m_level")
    .select("m_level.*", "m_game.game_name")
    .select(global.knexCon.raw(`group_concat(question_id) as question_id`))
    .join("m_game", "m_level.game_id", "=", "m_game.game_id")
    .leftJoin(
      "m_level_link_question",
      "m_level.level_id",
      "=",
      "m_level_link_question.level_id"
    )
    .where((builder) => {
      if (req.query.level_id) {
        builder.where({ "m_level.level_id": req.query.level_id });
      }
    })
    .groupBy("m_level.level_id")
    .paginate(pagination(limit, currentPage))
    .then((response) => {
      response.data.map((x) => {
        x["question_id"] = x.question_id ? x.question_id.split(",") : [];
        x["total_question"] = x["question_id"].length;
      });

      if (response.data.length == 1) {
        let Limit = 15;
        if (req.query.isDashboard) {
          Limit = 20
        }
        global
          .knexCon("m_questions")
          .whereIn("question_id", response.data[0].question_id)
          .orderByRaw("RAND()")
          .limit(Limit)
          .then((res33) => {
            res33.map((y) => {
              //   y["UserAnswer"] = "";
              y["level_q_id"] = "";
              y["level"] = "";
              y["game_name"] = "";
            });

            res.send({
              status: true,
              Record: response,
              msg: "Question Array",
              questionArray: res33,
            });
          });
      } else {
        res.send({
          status: true,
          Record: response,
          msg: "Inserted S2uccesfully",
        });
      }
      // if (response.length > 0) {
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: false,
        Record: err,
      });
    });
};

module.exports.addEditQuestion = async (req, res) => {
  let reqbody = req.body;
  let validateArray = [
    "question",
    "question_type",
    "options",
    "correct_options",
    "question_is_active",
  ];

  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let obj = {
      question_type: reqbody.question_type,
      question: reqbody.question,
      question_new: reqbody.question_new,
      options: reqbody.options,
      correct_options: reqbody.correct_options,
      question_is_active: reqbody.question_is_active,
    };

    if (reqbody.question_id) {
      global
        .knexCon("m_questions")
        .update(obj)
        .where({ question_id: reqbody.question_id })
        .then((response) => {
          res.send({
            status: true,
            Record: obj,
            msg: "Updated Succesfully",
          });
        })
        .catch((err) => {
          res.send({
            status: false,
            Record: err,
          });
        });
    } else {
      global
        .knexCon("m_questions")
        .insert(obj)
        .then((response) => {
          if (response.length > 0) {
            obj["question_id"] = response[0];
            res.send({
              status: true,
              Record: obj,
              msg: "Inserted Succesfully",
            });
          } else {
            res.send({
              status: false,
              Record: response,
              msg: "something Went wrong",
            });
          }
        })
        .catch((err) => {
          res.send({
            status: false,
            Record: err,
          });
        });
    }
  } else {
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

module.exports.getQuestionList = async (req, res) => {
  let limit = req.query.limit ? req.query.limit : 10000;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;

  global
    .knexCon("m_questions")
    .select(
      "m_questions.*",
      "m_level_link_question.level_q_id",
      "m_level.level",
      "m_game.game_name"
    )
    .leftJoin(
      "m_level_link_question",
      "m_level_link_question.question_id",
      "=",
      "m_questions.question_id"
    )
    .leftJoin(
      "m_level",
      "m_level_link_question.level_id",
      "=",
      "m_level.level_id"
    )
    .leftJoin("m_game", "m_game.game_id", "=", "m_level.game_id")
    .where((builder) => {
      if (req.query.question_id) {
        builder.where({ "m_questions.question_id": req.query.question_id });
      }
      if (req.query.question_type) {
        builder.where({ "m_questions.question_type": req.query.question_type });
      }

      if (req.query.isUnique) {
        builder.whereRaw(`m_level.game_id is NULL `);
      }
    })
    .orderBy("m_questions.options")
    .paginate(pagination(limit, currentPage))
    .then((response) => {
      // if (response.length > 0) {
      res.send({
        status: true,
        Record: response,
        msg: "Inserted Succesfully",
      });
    })
    .catch((err) => {
      res.send({
        status: false,
        Record: err,
      });
    });
};

module.exports.getLeaderBoard = async (req, res) => {

  // select SUM(user_level_score.level_score)*10,m_user.user_id,m_user.user_name,m_user.user_image from user_level_score inner join  m_user on m_user.user_id=user_level_score.user_id where score_is_active=1 group by m_user.user_id;

  let limit = req.query.limit ? req.query.limit : 200;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;
  let Filter = ""
  if (req.query.game_id) {
    Filter = ` and game_id=${req.query.game_id}`;

  }
  let UserPoint = await global.knexCon.raw(`select SUM(user_level_score.level_score) as total_score from user_level_score
  left join m_level on m_level.level_id=user_level_score.level_id
   where user_id = ${req.query.user_id} and score_is_active='1'  ${Filter}`);
  let UserRank = "";

  if (UserPoint[0][0].total_score) {
    // UserRank = await global.knexCon.raw(`select count(*) as rank from user_level_score 
    // left join m_level on m_level.level_id=user_level_score.level_id
    // where score_is_active = "1" ${Filter} group by user_level_score.user_id  Having(SUM(user_level_score.level_score) * 10) > ${UserPoint[0][0].total_score};
    // `);

    UserRank = await global.knexCon.raw(`select m_user.user_id, m_user.user_image,m_user.user_name,(select SUM(level_score) 
    from user_level_score where user_id = m_user.user_id and score_is_active='1') as score, 
    group_concat(Distinct m_user.user_id) as user_id2,group_concat(Distinct m_user.user_image) as user_image2,
    group_concat(Distinct m_user.user_name) as user_name2 from m_user
    inner join user_level_score on m_user.user_id = user_level_score.user_id left join m_level on m_level.level_id = user_level_score.level_id where score_is_active = '1' ${Filter}  group by score having score> ${UserPoint[0][0].total_score}`)

    // if (UserRank[0].length > 0) {
    UserRank = UserRank[0].length + 1;

    // }

  }
  let idCheck = "";
  if (
    req.query.game_id
  ) {
    idCheck = ` and mL.game_id=${req.query.game_id}`;
  }


  // select from m_user inner join user_level_score on m_user.user_id = user_level_score.user_id group by total_score order by total_score DESC;

  global
    .knexCon("m_user").join("user_level_score", "m_user.user_id", "=", "user_level_score.user_id").leftJoin("m_level", "m_level.level_id", "=", "user_level_score.level_id")
    .where((builder) => {
      if (req.query.game_id) {
        builder.where({ "m_level.game_id": req.query.game_id });
      }

      builder.where({ score_is_active: "1", })
    })


    // .andWhereRaw(`m_user.user_id != ${req.query.user_id} `)
    // .select(global.knexCon.raw(`SUM(user_level_score.level_score) * 10 as score, m_user.user_id, m_user.user_name, m_user.user_image`))
    .select(global.knexCon.raw(`m_user.user_id, m_user.user_image,m_user.user_name,(select SUM(level_score)  from user_level_score  inner join m_level mL on  mL.level_id=user_level_score.level_id where user_id = m_user.user_id and score_is_active='1' ${idCheck}) as score, group_concat(Distinct m_user.user_id) as user_id2,group_concat(Distinct m_user.user_image) as user_image2,group_concat(Distinct m_user.user_name) as user_name2`))
    .groupBy("score")
    .orderByRaw(`score DESC`)
    .paginate(pagination(limit, currentPage))
    .then((response) => {
      let pointArray = 0;
      let array_user_rank = 0;
      let NewResponseArray = [];
      let indexOfNew = [];
      response.data.map((x, index) => {

        x["totalonThisRank"] = x.user_id2.split(",");
        x['total_on_rank'] = x["totalonThisRank"].length;

        let findIndexNew = x["totalonThisRank"].indexOf(req.query.user_id.toString());

        if (x["totalonThisRank"].length == 1 && x.user_id == req.query.user_id) {
          UserRank = index + 1;
        } else if (findIndexNew >= 0) {
          UserRank = index + 1;
          x["Rank"] = index + 1;
          NewResponseArray.push(x)
          if (x.user_id == req.query.user_id) {
            let UserImageArray = x.user_image2.split(",");
            if (UserImageArray.length > 1) {
              x["user_image"] = UserImageArray[0] == x.user_image ? UserImageArray[1] : UserImageArray[0]
            }
            let UsernameArray = x.user_name2.split(",");
            if (UsernameArray.length > 1) {
              x["user_name"] = UsernameArray[0] == x.user_name ? UsernameArray[1] : UsernameArray[0]
            }
            let UserIdArray = x.user_id2.split(",");
            if (UserIdArray.length > 1) {
              console.log(UserIdArray, UsernameArray, UserImageArray);
              x["user_id"] = UserIdArray[0] == req.query.user_id ? UserIdArray[1] : UserIdArray[0]
            }

          }
        } else {
          x["Rank"] = index + 1;
          NewResponseArray.push(x)

        }

      })

      res.send({
        status: true,
        Record: { data: NewResponseArray },
        UserRank: UserRank,
        UserPoint: UserPoint[0][0].total_score ? UserPoint[0][0].total_score : 0,
        msg: "Inserted Succesfully",

      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: false,
        Record: err,
      });
    });


}

//Game Api
module.exports.getGameList = async (req, res) => {
  let limit = req.query.limit ? req.query.limit : 100;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;
  let arrayNew = [{ game_id: "", game_name: "All" }];
  global
    .knexCon("m_game")
    .where((builder) => {
      if (req.query.game_id) {
        builder.where({ game_id: req.query.game_id, game_is_active: "Y" });
      }
    })
    .paginate(pagination(limit, currentPage))
    .then((response) => {

      response.data.map(x => {
        if (x.game_id != 4) {
          let obj = {
            game_name: x.game_name.split(" ")[0],
            game_id: x.game_id
          }
          arrayNew.push(obj);
        }

      })
      // if (response.length > 0) {
      res.send({
        status: true,
        Record: response,
        msg: "Inserted Succesfully",
        LeaderBoard: arrayNew,
        shareUrl: 'https://www.figma.com/file/BVhnYL2qNQyyBRC0RQk39K/MyCinema.world-(Sanath)?node-id=0%3A1',
        instruction: ["1. Each Game Need 10 points", "2. Clear Level 10 out of 15"],
        paymentArray: [
          { id: 1, iconName: 'cubes', description: '500 coins', amount: "10", amountIcon: "inr", point: 500 },
          { id: 2, iconName: 'cubes', description: '1000 Coins', amount: "20", amountIcon: "inr", point: 1000 },
          { id: 3, iconName: 'cubes', description: '2000 Coins', amount: "30", amountIcon: "inr", point: 2000 },
          { id: 4, iconName: 'cubes', description: '3000 Coins', amount: "40", amountIcon: "inr", point: 3000 },

          // {id:2, iconName:"speaker-notes", description: "Instruction",Info:},
        ]
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: false,
        Record: err,
      });
    });
};

//User Score Score
module.exports.addScore = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["level_id", "user_id", "level_out_of"];
  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let settingArray = await global.knexCon("settings");
    let UserArray = await global
      .knexCon("m_user")
      .where({ user_id: reqbody.user_id });
    let LevelArray = await global
      .knexCon("m_level")
      .where({ level_id: reqbody.level_id });
    let checkExamForLevel = await global.knexCon("user_level_score").where({
      user_id: reqbody.user_id,
      level_id: reqbody.level_id,
      score_is_active: "1",
    });
    let obj = {
      level_id: reqbody.level_id,
      user_id: reqbody.user_id,
      level_score: reqbody.level_score,
      level_out_of: reqbody.level_out_of,
    };
    let msg = "";
    let sendArrayStar = [];
    let passedStatus = false;
    console.log(checkExamForLevel, "dsad");

    // if (checkExamForLevel.length == 0) {

    let updatePoints = 0;

    if (parseInt(settingArray[0].passing_score) <= reqbody.level_score) {
      msg = "Level " + LevelArray[0].level + " Completed";
      passedStatus = true;
      updatePoints =
        parseInt(UserArray[0].user_points) +
        parseInt(settingArray[0].credit_pass_points);
      obj["score_is_active"] = "1";
    } else {
      obj["score_is_active"] = "0";
      msg = "Level " + LevelArray[0].level + " Failed";
      updatePoints =
        parseInt(UserArray[0].user_points) -
        parseInt(settingArray[0].level_fail_dedution_point);
    }
    if (updatePoints < 0) {
      updatePoints = 0;
    }
    if (checkExamForLevel.length > 0) {
      if (
        parseInt(checkExamForLevel[0].level_score) <
        parseInt(reqbody.level_score)
      ) {
        let updateScore = await global
          .knexCon("user_level_score")
          .update({ score_is_active: "0" })
          .where({ user_ls_id: checkExamForLevel[0].user_ls_id });
        obj["score_is_active"] = "1";
      } else {
        obj["score_is_active"] = "0";
      }
    }

    let nextLevelId = 0;

    if (passedStatus) {
      nextLevelId = await global.knexCon("m_level").where({
        level: LevelArray[0].level + 1,
        game_id: LevelArray[0].game_id,
      });
      nextLevelId = nextLevelId[0].level + "-" + nextLevelId[0].level_id;
    }

    let percentageCalculate =
      (parseInt(reqbody.level_score) / parseInt(reqbody.level_out_of)) * 100;
    console.log(percentageCalculate, "fsfsdf");

    if (percentageCalculate == 0) {
      sendArrayStar = ["star-o", "star-o", "star-o"];
    } else if (percentageCalculate > 0 && percentageCalculate < 33) {
      sendArrayStar = ["star-half-o", "star-o", "star-o"];
    } else if (percentageCalculate >= 33 && percentageCalculate < 49) {
      sendArrayStar = ["star", "star-o", "star-o"];
    } else if (percentageCalculate >= 49 && percentageCalculate < 66) {
      sendArrayStar = ["star", "star-half-o", "star-o"];
    } else if (percentageCalculate >= 66 && percentageCalculate < 82) {
      sendArrayStar = ["star", "star", "star-o"];
    } else if (percentageCalculate >= 82 && percentageCalculate < 100) {
      sendArrayStar = ["star", "star", "star-half-o"];
    } else {
      sendArrayStar = ["star", "star", "star"];
    }

    global
      .knexCon("user_level_score")
      .insert(obj)
      .then((response) => {
        if (response.length > 0) {
          UserArray[0].user_points = updatePoints;

          if (checkExamForLevel.length == 0) {
            global
              .knexCon("m_user")
              .update({ user_points: updatePoints })
              .where({ user_id: reqbody.user_id })
              .then((resUser) => {
                res.send({
                  status: true,
                  Record: obj,
                  msg: msg,
                  userArray: UserArray,
                  passedStatus: passedStatus,
                  starCheck: sendArrayStar,
                  nextLevel: nextLevelId,
                });
              })
              .catch((err2) => {
                console.log(err2);
              });
          } else {
            res.send({
              status: true,
              Record: obj,
              msg: msg,
              userArray: UserArray,
              passedStatus: passedStatus,
              starCheck: sendArrayStar,
              nextLevel: nextLevelId,
            });
          }
        } else {
          res.send({
            status: false,
            Record: response,
            msg: "something Went wrong",
          });
        }
      })
      .catch((err) => {
        res.send({
          status: false,
          Record: err,
        });

        // })
      });
  } else {
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

///USER API

module.exports.addEditUserToken = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["token"];
  // let MsgError = ["Please enter user name", "Please select profile image", ""];

  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let obj = {
      token: reqbody.token
    };
    if (reqbody.user_id) {
      global
        .knexCon("m_user")
        .update(obj)
        .where({ user_id: reqbody.user_id })
        .then((response) => {
          res.send({
            status: true,
            Record: obj,
            msg: "Updated Succesfully",
          });
        })
        .catch((err) => {
          res.send({
            status: false,
            Record: err,
          });
        });
    }
  } else {
    let indexCheck = responseError.msgIndex;
    responseError["msg"] = MsgError[indexCheck];
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

module.exports.addTransactionDetail = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["user_id", "amount", "point", "payment_detail", "payment_id"];

  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let UserArray = await global
      .knexCon("m_user")
      .where({ user_id: reqbody.user_id });
    var options = {
      'method': 'GET',
      'url': 'https://api.razorpay.com/v1/payments/' + reqbody.payment_id,
      'headers': {
        'Authorization': 'Basic cnpwX3Rlc3RfOURHV2hsUTdaemJaY3c6VmJVOXQ0YWFTR2FxS0huZ2tLWmtBUEQy'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      if (JSON.parse(response.body).error_reason == null) {
        let obj = {
          user_id: reqbody.user_id,
          amount: reqbody.amount,
          payment_detail: reqbody.payment_detail,
          point: reqbody.point,
          payment_id: reqbody.payment_id,

        };
        if (reqbody.user_id) {
          global
            .knexCon("transaction_detail")
            .insert(obj)
            .then((response) => {



              global
                .knexCon.raw(`update m_user set user_points=user_points+${parseInt(reqbody.point)} where user_id=${reqbody.user_id}`).then(res33 => {
                  UserArray[0].user_points = parseInt(reqbody.point) + parseInt(UserArray[0].user_points)
                  res.send({
                    status: true,
                    Record: obj,
                    UserArray: UserArray,
                    msg: "Inserted Succesfully",
                  });

                }).catch(errr => {


                })

            })
            .catch((err) => {
              res.send({
                status: false,
                Record: err,
              });
            });
        }

      } else {
        res.send({
          status: false,
          Record: "Payment Failed",
        });

      }


    });

  } else {
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

module.exports.addEditUser = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["user_name", "user_image", "uuid"];
  let MsgError = ["Please enter user name", "Please select profile image", ""];

  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let obj = {
      user_name: reqbody.user_name,
      user_image: reqbody.user_image,
      user_type: "0",
      uuid: reqbody.uuid,
      user_is_active: "1",
    };
    if (reqbody.user_id) {
      global
        .knexCon("m_user")
        .update(obj)
        .where({ user_id: reqbody.user_id })
        .then((response) => {
          res.send({
            status: true,
            Record: obj,
            msg: "Updated Succesfully",
          });
        })
        .catch((err) => {
          res.send({
            status: false,
            Record: err,
          });
        });
    } else {
      global
        .knexCon("m_user")
        .where({
          uuid: req.body.uuid,
        })
        .then((response) => {
          if (response.length > 0) {
            return res.send({
              status: false,
              Record: response,
              msg: "Already Exists",
            });
          } else {
            obj["user_points"] = 500;
            global
              .knexCon("m_user")
              .insert(obj)
              .then((response) => {
                if (response.length > 0) {
                  obj["user_id"] = response[0];
                  res.send({
                    status: true,
                    Record: obj,
                    msg: "Profile Created Succesfully",
                  });
                } else {
                  res.send({
                    status: false,
                    Record: response,
                    msg: "something Went wrong",
                  });
                }
              })
              .catch((err) => {
                res.send({
                  status: false,
                  Record: err,
                });
              });
          }
        })
        .catch((err) => {
          return res.send({
            status: false,
            Record: err,
          });
        });
    }
  } else {
    let indexCheck = responseError.msgIndex;
    responseError["msg"] = MsgError[indexCheck];
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

module.exports.getuserlist = async (req, res) => {
  let limit = req.query.limit ? req.query.limit : 1000;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;

  global
    .knexCon("m_user")
    .where((builder) => {
      if (req.query.user_id) {
        builder.where({ user_id: req.query.user_id });
      }
    })
    .paginate(pagination(limit, currentPage))
    .then((response) => {
      // if (response.length > 0) {
      res.send({
        status: true,
        Record: response,
        msg: "Inserted Succesfully",
      });
    })
    .catch((err) => {
      res.send({
        status: false,
        Record: err,
      });
    });
};

//app api

module.exports.getLevelByGame = async (req, res) => {
  let game_level = await global.knexCon
    .raw(`select m_level.*, level_score,if (level_score is null, 0, (level_score / level_out_of) * 100) as percentage from m_level left join user_level_score on user_level_score.level_id = m_level.level_id and user_level_score.score_is_active = '1' and user_level_score.user_id = "${req.query.user_id}" where game_id = ${req.query.game_id}
  `);

  let user_level = await global
    .knexCon("user_level_score")
    .select("m_level.level")
    .join("m_level", "m_level.level_id", "=", "user_level_score.level_id")
    .where({
      "user_level_score.user_id": req.query.user_id,
      score_is_active: "1",
      game_id: req.query.game_id,
    })
    .orderBy(" m_level.level", "DESC")
    .limit(1);

  game_level[0].map((x) => {
    if (x["percentage"] == 0) {
      x["star_array"] = ["star-o", "star-o", "star-o"];
    } else if (x["percentage"] > 0 && x["percentage"] < 33) {
      x["star_array"] = ["star-half-o", "star-o", "star-o"];
    } else if (x["percentage"] >= 33 && x["percentage"] < 49) {
      x["star_array"] = ["star", "star-o", "star-o"];
    } else if (x["percentage"] >= 49 && x["percentage"] < 66) {
      x["star_array"] = ["star", "star-half-o", "star-o"];
    } else if (x["percentage"] >= 66 && x["percentage"] < 82) {
      x["star_array"] = ["star", "star", "star-o"];
    } else if (x["percentage"] >= 82 && x["percentage"] < 100) {
      x["star_array"] = ["star", "star", "star-half-o"];
    } else {
      x["star_array"] = ["star", "star", "star"];
    }
  });

  res.send({
    status: true,
    Record: game_level[0],
    msg: "Game Level",
    current_user_level: 50
    // current_user_level: user_level.length > 0 ? user_level[0].level + 1 : 1,
  });
};
