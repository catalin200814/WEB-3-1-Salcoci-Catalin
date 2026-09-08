let s=0,m=0,i=null;

function cronometru(actiune) {
  if(actiune=='start' && i==null) {
    i=setInterval(()=>{
      s++;
      if(s==60){s=0;m++}
      document.getElementById('timer').innerHTML=(m<10?'0':'')+m+':'+(s<10?'0':'')+s
    },1000)
  }
  if(actiune=='stop' && i!=null) {
    clearInterval(i)
    i=null
  }
  if(actiune=='reset') {
    clearInterval(i)
    i=null
    s=0;m=0
    document.getElementById('timer').innerHTML='00:00'
  }
}