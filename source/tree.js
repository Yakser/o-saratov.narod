
			function node(index,id_val,text,state,url,type,parent,title)
			{//����������� ����
				this.index = index;//����� � ������� , == ������� �������� � �������
				this.id_val = id_val;// ���������� �����, ����� � ������ � ��
				this.text  = text;// ������� �����
				this.state = state;// ���������, + ��� - (������� ��� �������), ��� �� �����������!
				this.url = url;// ������ ������
				this.type = type;//��� ����, ��� ����������� �������� � ��� ��. ������.
				this.parent = parent;// id_val ��������
				this.title = title;//����������� ���������
			}
			
			function picture_array(str_open,str_close)
			{//����������� �������� ��������
				this.str_open = str_open;
				this.str_close = str_close;
			}
			
			function expand_click(index,sender)
			{//�������� �� �����
				var visible_node;//���� �� ������� ������!
				var visible_img;//�������� � �������
				var visible_pluse;//�������� � ������ ��� �������!
				if(document.all)
				{//��� Internet Explorer
					 visible_node= document.all("C"+node_array[index].index); 
					 visible_img= document.all("C"+node_array[index].index+"img"); 
					 visible_pluse= document.all("C"+node_array[index].index+"pluse"); 
				}
				else
				{//��� Netscape
					visible_node= document.getElementById("C"+node_array[index].index); 
					visible_img= document.getElementById("C"+node_array[index].index+"img");
					visible_pluse= document.getElementById("C"+node_array[index].index+"pluse");
				}
				if (node_array[index].state ==0)
				{//���������!
					visible_node.style.display = "";
					visible_pluse.src = "image/expanded.gif";
					visible_img.src = "image/" +pic_str[node_array[index].type].str_open;
					node_array[index].state = 1;
					return;
				}
				if (node_array[index].state ==1)
				{//���������
					visible_node.style.display = "none";
					visible_pluse.src = "image/collapsed.gif";
					visible_img.src = "image/" +pic_str[node_array[index].type].str_close;
					node_array[index].state = 0;
					return;
				}
			}
			
			
			function write_tree()
			{//������ ������
				for (var i =0 ; i< node_array.length ; i++)
				{
					if(node_array[i].parent == 0)
					{
						
						write_child(node_array[i].index);
					}
				}
			}
			function parse_link(index)
			{//������ ������
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
			{// ������ ���������
				
				if (node_array[index].state == 0)
				{//�������� ����
					document.write("<img ID=C"  +  node_array[index].index +  "pluse src=\"image/collapsed.gif\"  onClick=\"expand_click("  + node_array[index].index +  ", this)\">");
					document.write("<img ID=C"  +  node_array[index].index +  "img src=\"image/"  +pic_str[node_array[index].type].str_close+ "\" >");
					parse_link(index);
					document.write("<DIV ID=C"  +  node_array[index].index  +  " STYLE=\"margin-left:15; display: none;\">");
				}
				if (node_array[index].state == 1)
				{//��������
					document.write("<img ID=C"  +  node_array[index].index +  "pluse src=\"image/expanded.gif\"  onClick=\"expand_click("  + node_array[index].index +  ", this)\">");
					document.write("<img ID=C"  +  node_array[index].index +  "img src=\"image/"  +pic_str[node_array[index].type].str_open+ "\" >");
					parse_link(index);
					document.write("<DIV ID=C"  +  node_array[index].index  +  " STYLE=\"margin-left:15;\">");
				}
				if (node_array[index].state == 3)
				{//��� �������� 
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