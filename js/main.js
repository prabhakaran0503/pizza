function clickorder(e){
    ((order1, order2, callback)=> {
        console.log('cheese barbeque pizza ordered');
        console.log('cheese barbeque pizza for preparation');
        setTimeout(()=> {
            let ans = `Your ${order1} ${order2} is ready`;
            callback(ans)
            console.log(`On the Way Pizzahub server`);
        }, 5000);
        setTimeout(()=>{
            console.log(`Succesfully Deliverd Thanks for your order`);
        },10000)
    })
    ("cheese", "barbeque pizza",(message)=>{
        console.log(message);
    });
}
clickorder()


