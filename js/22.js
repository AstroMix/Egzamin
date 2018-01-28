'use strict';

(function(){
    
    function ValidateForm(form, err){
        
        this._formHTML = document.querySelector(form) || document.querySelector('form');
        this._errorHTML = document.querySelector(err) || document.querySelector('#error');       
        this._assignEvents();
        
        
    }
    
    ValidateForm.prototype._assignEvents = function(){
        this._formHTML.addEventListener('submit' , this._validateFields.bind(this) , true);
       
    }
    
    ValidateForm.prototype._validateFields = function(e){
        this._errors = [];
    
        if(!e.target[0].value){
            this._addError('Uzupełnij data urodzenia');
            
        }
        
        this._mailPatern = /^[\d]{4}-[\d]{2}-[\d]{2}$/;
        if(e.target[1].value && !this._mailPatern.test(e.target[1].value)){
            this._addError('Pole ma zły format');
        }
        
        if(!e.target[1].value){
            this._addError('Uzupełnij pole email');
            
        }
        this._mailPatern = /^[\w]+[.-]*[a-z\d]*@[\w]+[.-]*[a-z\d]*\.[a-z]{2,8}$/;
        if(e.target[1].value && !this._mailPatern.test(e.target[1].value)){
            this._addError('Pole mail musi spełniać wymagania złożoności');
        }
        
        if(!e.target[2].value){
            this._addError('Uzupełnij wiadomość');
            
        }
        this._textPatern = /^{6,}$/;
        if(e.target[2].value && !this._textPaternPatern.test(e.target[2].value)){
            this._addError('Wiadomość jest za krótka');
        }
        
           
        
               
        if(this._errors.length > 0){
            e.preventDefault();
        }
    }
    
    ValidateForm.prototype._addError = function(err){
        this._errors.push(err);
        this._printErrors();
        
    }
    
    ValidateForm.prototype._printErrors = function(){
        this._messegeError = '';
        for(let i in this._errors){
            this._messegeError += `${this._errors[i]}<br>`;
        }
        this._textError = (this._errors.length > 1) ? "Wystąpiły błędy:" : "Wystąpił błąd:";

       
        this._errorHTML.innerHTML = `${this._textError}<br> ${this._messegeError}`;
    }
    
    new ValidateForm();
    
})();