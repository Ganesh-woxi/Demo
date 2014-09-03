<!-- File: /app/View/Posts/add.ctp -->

<h1>Add News Letter Information</h1>
<?php
echo $this->Form->create('Post');
echo $this->Form->input('title');
echo $this->Form->input('body');
echo $this->Form->input('link');
echo $this->Form->end('Save');
?>
