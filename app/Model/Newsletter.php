<?php

class Newsletter extends AppModel {
    public $validate = array(
        'title' => array(
            'rule' => 'notEmpty'
        ),
        'body' => array(
            'rule' => 'notEmpty'
        ),
        'link' => array(
            'rule' => 'url',
            'required'   => true,
        ),
    );
}


?>

