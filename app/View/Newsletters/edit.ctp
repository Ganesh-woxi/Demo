<!-- File: /app/View/Posts/edit.ctp -->

<h1>Edit Newsletter</h1>
<?php
echo $this->Form->create('Newsletter');
echo $this->Form->input('title');
echo $this->Form->input('body', array('rows' => '3'));
echo $this->Form->input('id', array('type' => 'hidden'));
echo $this->Form->end('Save Newsletter');
?>