<!-- File: /app/View/Posts/index.ctp -->

<h1>News Letter</h1>
<p><?php echo $this->Html->link('Add Newsletter', array('action' => 'add')); ?></p>
<p><?php echo $this->Html->link('Show Newsletters', array('action' => 'show')); ?></p>
<table>
    <tr>
        <th>Id</th>
        <th>Title</th>
        <th>link</th>
        <th>Actions</th>
    </tr>

<!-- Here's where we loop through our $posts array, printing out post info -->

    <?php foreach ($newsletters as $newsletter): ?>
    <tr>
        <td><?php echo $newsletter['Newsletter']['id']; ?></td>
        <td>
            <?php
                echo $this->Html->link(
                    $newsletter['Newsletter']['title'],
                    array('action' => 'view', $newsletter['Newsletter']['id'])
                );
            ?>
        </td>
        <td>
            <?php
                echo $this->Html->link(
                    $newsletter['Newsletter']['link'],$newsletter['Newsletter']['link'],
                    array()
                );
            ?>            
        </td>
        <td>
            <?php
                echo $this->Form->postLink(
                    'Delete',
                    array('action' => 'delete', $newsletter['Newsletter']['id']),
                    array('confirm' => 'Are you sure?')
                );
            ?>
            <?php
                echo $this->Html->link(
                    'Edit', array('action' => 'edit', $newsletter['Newsletter']['id'])
                );
            ?>
        </td>
     </tr>
    <?php endforeach; ?>

</table>