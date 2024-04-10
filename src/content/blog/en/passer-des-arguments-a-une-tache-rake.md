---
title: Passer des arguments à une tâche rake
snippet: L'écriture d'une tâche rake est monnaie courante pour les développeurs Ruby on Rails
pubDate: 2017-05-17
tags:
  - ruby
  - rails
  - rake
published: true
category: Tips
---
L'écriture d'une tâche rake est monnaie courante pour les développeurs Ruby on Rails, mais on a tous cherché à un moment donné comment passer des arguments à sa tâche rake pour la rendre plus générique. C'est d'autant plus un problème que la syntaxe n’est pas vraiment facile à mémoriser et il faut aussi se rappeler comment faire les appels à ces tâches rake avec arguments.
Je vous mets donc ici différentes tâches utilisant des arguments.


* **une tâche rake basique utilisant des arguments**

``` ruby
namespace :demo do
  task :your_task, [:arg1, :arg2] do |t, args|
    puts "Arg1 is: #{args[:arg1]}"
    puts "Arg2 is: #{args[:arg2]}"
  end
end

```

* **une tâche rake avec des arguments par défaut**

``` ruby
namespace :demo do
  task :your_task_with_default, [:arg1, :arg2] do |t, args|
    args.with_defaults(:arg1 => "default1", :arg2 => "default2")
    puts "Arg1 is: #{args[:arg1]}"
    puts "Arg2 is: #{args[:arg2]}"
  end
end
```

Maintenant que vous savez écrire votre tâche rake on peut l'appeler de différent façon:

* **passer des arguments à une tâche rake en console**

```
> rake demo:your_task[1,2]
Arg1 is: 1
Arg2 is: 2

> rake "demo:your_task[1, 2]"
Arg1 is: 1
Arg2 is: 2

> rake demo:your_task_with_default
Arg1 is: default1
Arg2 is: default2

> rake demo:your_task_with_default[val1,val2]
Arg1 is: val1
Arg2 is: val2

```

* **passer des arguments à une tâche rake depuis une autre tâche rake**

``` ruby
task :main_task do
  Rake::Task['demo:your_task'].invoke('val1', 'val2')
end
```

Emballé, c'est pesé !
