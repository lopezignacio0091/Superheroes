export default class SuperHeroeDTO {

  
    static getSuperHeroe = (res) => {
        let obj = {};
        obj.id = res.id;
        obj.name = res.name;
        obj.image = res.image.url;
        obj.aligment = res.biography.alignment;
        obj.powerstats = res.powerstats;
        obj.weight = res.appearance.weight[1].split(" ")[0];
        obj.height = res.appearance.height[1].split(" ")[0];
        return obj;
    }

    static postSuperHeroe = (res) => {
        let obj = {};
        obj.id = res.id;
        obj.name = res.nombre;
        obj.image = res.imagen;
        obj.aligment = res.alineacion;
        obj.powerstats = res.powers;
        obj.weight= res.weight[1].split(" ")[0];
        obj.height = res.height[1].split(" ")[0];
        return obj;
    }

}