SET NAMES 'utf8';
DROP DATABASE IF EXISTS zhihu;
CREATE DATABASE zhihu CHARSET=UTF8;
USE zhihu;

CREATE TABLE question_list(
    qid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64),
    u_name VARCHAR(64),
    img_sm VARCHAR(64),
    img_lg VARCHAR(64),
    detail VARCHAR(2048),
    material VARCHAR(2048),
    s_intro VARCHAR(64)
);
INSERT INTO question_list(qid,name,u_name,img_sm,img_lg,detail,material,s_intro) VALUES
(  null,
   '朱炫',
   'Shen Homer',
   'd967013f56b0827226d2fc80a35d63ec_l.jpg',
   'e61a3a4bfefecc066f5f938691a1c1d2_xld.jpg',
   '你做过最机智的事情是什么?',
   '大半夜，东航客服电话打了半小时永远繁忙，而我急着改签机票。突然我灵机一动选择了英文服务，电话瞬间接通，我平静的问“can u speak Chinese?”对方沉默了三秒后回答“你说吧” 。于是我们全程用亲切的中文完成了交流。',
   '前PLA，业余MMA选手，留学狗，酗酒酒保'
),
(  null,
   '朱炫',
   'Shen Homer',
   'd967013f56b0827226d2fc80a35d63ec_l.jpg',
   'e61a3a4bfefecc066f5f938691a1c1d2_xld.jpg',
   '你做过最机智的事情是什么?',
   '大半夜，东航客服电话打了半小时永远繁忙，而我急着改签机票。突然我灵机一动选择了英文服务，电话瞬间接通，我平静的问“can u speak Chinese?”对方沉默了三秒后回答“你说吧” 。于是我们全程用亲切的中文完成了交流。',
   '前PLA，业余MMA选手，留学狗，酗酒酒保'
),
(  null,
   '朱炫',
   'Shen Homer',
   'd967013f56b0827226d2fc80a35d63ec_l.jpg',
   'e61a3a4bfefecc066f5f938691a1c1d2_xld.jpg',
   '你做过最机智的事情是什么?',
   '大半夜，东航客服电话打了半小时永远繁忙，而我急着改签机票。突然我灵机一动选择了英文服务，电话瞬间接通，我平静的问“can u speak Chinese?”对方沉默了三秒后回答“你说吧” 。于是我们全程用亲切的中文完成了交流。',
   '前PLA，业余MMA选手，留学狗，酗酒酒保'
),
(  null,
   '朱炫',
   'Shen Homer',
   'd967013f56b0827226d2fc80a35d63ec_l.jpg',
   'e61a3a4bfefecc066f5f938691a1c1d2_xld.jpg',
   '你做过最机智的事情是什么?',
   '大半夜，东航客服电话打了半小时永远繁忙，而我急着改签机票。突然我灵机一动选择了英文服务，电话瞬间接通，我平静的问“can u speak Chinese?”对方沉默了三秒后回答“你说吧” 。于是我们全程用亲切的中文完成了交流。',
   '前PLA，业余MMA选手，留学狗，酗酒酒保'
),
(  null,
   '朱炫',
   'Shen Homer',
   'd967013f56b0827226d2fc80a35d63ec_l.jpg',
   'e61a3a4bfefecc066f5f938691a1c1d2_xld.jpg',
   '你做过最机智的事情是什么?',
   '大半夜，东航客服电话打了半小时永远繁忙，而我急着改签机票。突然我灵机一动选择了英文服务，电话瞬间接通，我平静的问“can u speak Chinese?”对方沉默了三秒后回答“你说吧” 。于是我们全程用亲切的中文完成了交流。',
   '前PLA，业余MMA选手，留学狗，酗酒酒保'
),
(  null,
   '朱炫',
   'Shen Homer',
   'd967013f56b0827226d2fc80a35d63ec_l.jpg',
   'e61a3a4bfefecc066f5f938691a1c1d2_xld.jpg',
   '你做过最机智的事情是什么?',
   '大半夜，东航客服电话打了半小时永远繁忙，而我急着改签机票。突然我灵机一动选择了英文服务，电话瞬间接通，我平静的问“can u speak Chinese?”对方沉默了三秒后回答“你说吧” 。于是我们全程用亲切的中文完成了交流。',
   '前PLA，业余MMA选手，留学狗，酗酒酒保'
),
(  null,
   '朱炫',
   'Shen Homer',
   'd967013f56b0827226d2fc80a35d63ec_l.jpg',
   'e61a3a4bfefecc066f5f938691a1c1d2_xld.jpg',
   '你做过最机智的事情是什么?',
   '大半夜，东航客服电话打了半小时永远繁忙，而我急着改签机票。突然我灵机一动选择了英文服务，电话瞬间接通，我平静的问“can u speak Chinese?”对方沉默了三秒后回答“你说吧” 。于是我们全程用亲切的中文完成了交流。',
   '前PLA，业余MMA选手，留学狗，酗酒酒保'
);

##SELECT * FROM question_list;
