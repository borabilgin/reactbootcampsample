
import { Observable } from 'rx';
import { DOM } from 'rx-dom';

export interface WikipediaItem {
    msg: string;
}

class HttpService {
    genericRequest<T>(url: string, methodName: string, body?: {}): Observable<T> {                   
        return DOM.ajax(
                {
                    method: methodName.toUpperCase(),
                    url: url,
                    body: JSON.stringify(body),
                    crossDomain: true,
                    
                } 
            )               
            .take(1)            
            .flatMapObserver(
                (res, i) => {   
                    return Rx.Observable.return(
                       JSON.parse(res.response)); },                                                  
                (err) => {                  
                    if (err && err.status === 401) {
                        if (window.location.href.indexOf('/login') === -1) {
                            window.location.replace('/algogram/home/login');
                        }
                    }                                      
                    try {
                        return Rx.Observable.throw(err);
                    } catch (e) {
                        return Rx.Observable.return(err);
                    }
                },                    
                () => {
                    return Rx.Observable.empty(); });
    }

    getCustom<T>(url: string): Observable<T> {       
        return this.genericRequest(url, 'GET');
    }

    getCustomWithParams<T>(url: string, param: string): Observable<T> {       
        return this.genericRequest(`${url}/${param}`, 'GET');
    }

    postCustom<T>(url: string, body?: {}): Observable<T> {        
        return this.genericRequest(url, 'POST', body);
    }

    putCustom<T>(url: string, body?: {}): Observable<T> {        
        return this.genericRequest(url, 'PUT', body);
    }

    deleteCustom<T>(url: string, body?: {}): Observable<T> {        
        return this.genericRequest(url, 'DELETE', body);
    }

    getWikiEntry(): Observable<WikipediaItem> {
        return this.getCustom<WikipediaItem>('http://demo9185611.mockable.io/');
    }
}

export default new HttpService();
