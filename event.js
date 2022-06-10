(function () {

    console.log('this is the start');  //1 sin eventloop
  
    setTimeout(function cb() {
      console.log('this is a msg from call back');//2 demanda el uso del eventloop
    });
  
    console.log('this is just a message');//3 sin eventloop
  
    setTimeout(function cb1() {
      console.log('this is a msg from call back1');//4 demanda el uso del eventloop
    }, 5000);
  
    console.log('this is the  end');//5 sin eventloop 
  
  })();

