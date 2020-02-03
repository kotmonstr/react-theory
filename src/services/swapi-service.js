import axios from 'axios';
import { API_BASE_DEFAULT } from '../config';
import { API_BASE } from '../config-local';
var BASE = API_BASE ? API_BASE : API_BASE_DEFAULT;


export default class SwapiService {

     login = async (url) => {
      let result = false;
      await axios.get(`${BASE}${url}`, [], {
            headers: {
              'Content-Type': 'application/json',
              'auth-key' : '355091663b69f4d49559c5ede9935de7',
              'Access-Control-Allow-Headers': '*'
            }
          }
      ).then( response => {
        result = response.data;// tru ore false
      })
          .catch(err => {
              console.log(err);
              return null;
          });
      return result;
  };

  getResource = async (url) => {
    let list = {};
    await axios.get(`${BASE}${url}`, [], {
          headers: {
            'Content-Type': 'application/json',
            'auth-key' : '355091663b69f4d49559c5ede9935de7'
          }
        }
    ).then( response => {
        list = response.data;
      })
      .catch(

      );

    return list;
  };

  getTotalList = async (itemsYear) => {
    const res = await this.getResource(`/vacation-report/index?auth-key=355091663b69f4d49559c5ede9935de7&itemsYear=${itemsYear}`); //puth
    let list = [];
    list = Object.entries(res.vacations)
      .map(this._transformTotalList);

    return list;
  };


  getTotalMonth = async (from) => {
    const res = await this.getResource(`/vacation-report/index?auth-key=355091663b69f4d49559c5ede9935de7&from=${from}`); //puth
    let list = [];
    list = Object.entries(res.vacations)
        .map(this._transformTotalMonth);

    return list;
  };

  _transformTotalList = (list) => {

    return {
      id: list[1].id,
      name: list[1].full_name,
      login: list[1].login,
      status: true,
      position: list[1].position,
      month: list[1].month,
      cost: list[1].cost,
      employment_date: list[1].employment_date,
      dismissal_date: list[1].dismissal_date,
    }

  };

  _transformTotalMonth = (list) => {

    return {
      id: list[1].id,
      login: list[1].login,
      name: list[1].full_name,
      from: list[1].from,
      to: list[1].to,
      position: list[1].position,
      cost: list[1].cost,
    }

  }

}
