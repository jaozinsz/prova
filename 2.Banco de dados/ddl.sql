create database VILAOINFOC;

use VILAOINFOC;

create table TB_VILAO(
id_vilao 			int primary key auto_increment,
nm_vilao 			varchar(100),
ds_maldades 		varchar(200),
bt_super_poder 		boolean
);
