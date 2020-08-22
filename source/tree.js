
			function node(index,id_val,text,state,url,type,parent,title)
			{//конструктор узла
				this.index = index;//номер в массиве , == индексу елемента в массиве
				this.id_val = id_val;// уникальный номер, нужен в случае с БД
				this.text  = text;// видимый текст
				this.state = state;// состояние, + или - (открыто или закрыто), или не открывается!
				this.url = url;// адресс ссылки
				this.type = type;//тип узла, для отображения картинки и для др. информ.
				this.parent = parent;// id_val родителя
				this.title = title;//всплывающая подсказка
			}
			
			function picture_array(str_open,str_close)
			{//конструктор названий картинок
				this.str_open = str_open;
				this.str_close = str_close;
			}
			
			function expand_click(index,sender)
			{//кликнули на ветку
				var visible_node;//узел на котором нажали!
				var visible_img;//картинка с значком
				var visible_pluse;//картинка с плюсом или минусом!
				if(document.all)
				{//для Internet Explorer
					 visible_node= document.all("C"+node_array[index].index); 
					 visible_img= document.all("C"+node_array[index].index+"img"); 
					 visible_pluse= document.all("C"+node_array[index].index+"pluse"); 
				}
				else
				{//для Netscape
					visible_node= document.getElementById("C"+node_array[index].index); 
					visible_img= document.getElementById("C"+node_array[index].index+"img");
					visible_pluse= document.getElementById("C"+node_array[index].index+"pluse");
				}
				if (node_array[index].state ==0)
				{//открываем!
					visible_node.style.display = "";
					visible_pluse.src = "image/expanded.gif";
					visible_img.src = "image/" +pic_str[node_array[index].type].str_open;
					node_array[index].state = 1;
					return;
				}
				if (node_array[index].state ==1)
				{//закрываем
					visible_node.style.display = "none";
					visible_pluse.src = "image/collapsed.gif";
					visible_img.src = "image/" +pic_str[node_array[index].type].str_close;
					node_array[index].state = 0;
					return;
				}
			}
			
			
			function write_tree()
			{//рисуем дерево
				for (var i =0 ; i< node_array.length ; i++)
				{
					if(node_array[i].parent == 0)
					{
						
						write_child(node_array[i].index);
					}
				}
			}
			function parse_link(index)
			{//разбор ссылок
				if (node_array[index].url != "")
				{
					document.write("<a title=\""    +node_array[index].title+   "\" href=\""   +node_array[index].url+    "\"target=\""+main_target+"\" onclick=\"expand_click("  + node_array[index].index +  ", this)\" class=\"navigation\" STYLE=\"margin-left:2;\">"  + node_array[index].text+  "</a><br>" );
				}
				else
				{
					document.write("<SPAN title=\""    +node_array[index].title+   "\" onclick=\"expand_click("  + node_array[index].index +  ", this)\" onclick=\"expand_click("  + node_array[index].index +  ", this)\"  class=\"navigation\" STYLE=\"margin-left:2;\">"  + node_array[index].text + "</SPAN><br>");
				}
			}
			
			function write_child(index)
			{// рисуем поддерево
				
				if (node_array[index].state == 0)
				{//закрытый узел
					document.write("<img ID=C"  +  node_array[index].index +  "pluse src=\"image/collapsed.gif\"  onClick=\"expand_click("  + node_array[index].index +  ", this)\">");
					document.write("<img ID=C"  +  node_array[index].index +  "img src=\"image/"  +pic_str[node_array[index].type].str_close+ "\" >");
					parse_link(index);
					document.write("<DIV ID=C"  +  node_array[index].index  +  " STYLE=\"margin-left:15; display: none;\">");
				}
				if (node_array[index].state == 1)
				{//открытый
					document.write("<img ID=C"  +  node_array[index].index +  "pluse src=\"image/expanded.gif\"  onClick=\"expand_click("  + node_array[index].index +  ", this)\">");
					document.write("<img ID=C"  +  node_array[index].index +  "img src=\"image/"  +pic_str[node_array[index].type].str_open+ "\" >");
					parse_link(index);
					document.write("<DIV ID=C"  +  node_array[index].index  +  " STYLE=\"margin-left:15;\">");
				}
				if (node_array[index].state == 3)
				{//без подузлов 
					document.write("<img ID=C"  +  node_array[index].index +  "pluse src=\"image/endnode.gif\">");
					document.write("<img ID=C"  +  node_array[index].index +  "img src=\"image/"  +pic_str[node_array[index].type].str_close+ "\" >")
					parse_link(index);
					document.write("<DIV>");
				}
				for (var i =0 ; i< node_array.length ; i++)
				{
					if(node_array[index].id_val == node_array[i].parent)
					{
						write_child(node_array[i].index);
					}
				}
				document.write("</DIV>");	
			}
			
			main_target="mainFrame";