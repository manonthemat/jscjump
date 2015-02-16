(function(){console.log("Press any key to jump over the obstacles.");
setTimeout(function(){
l=5;a=0;p=process;i=p.stdin;i.setRawMode(true);i.resume();i.setEncoding('utf8');
o=p.stdout;function c(){o.write('\033c');}x=77;y=3;d=10;w=7;
function g(){c();o.write('life:'+l+'\n\n');s="";for(z=1;z<80;++z){
if((z+w++)%d==0)s+='|';else s+='_';}o.write(s);if(s[77]==='|')if(y!=3)++a;
else if(l--===0)q();o.write('\033['+y+';'+x+'H');}
function j(){y=2;setTimeout(function(){y=1;},50);setTimeout(function(){y-2;}
,100);setTimeout(function(){y=3;},150);}i.on('data',j);setInterval(g,50);
function q(){console.log("\nYour score: ",a);p.exit();}},2000);})();
