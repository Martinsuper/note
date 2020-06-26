# java 多线程

## 多线程基础

### 线程执行并不是按照逻辑上的代码顺序执行的

```java
@Test
public void thread() {
    MyThread myThread = new MyThread();
    myThread.start();
    log.info("线程执行结束！");
}

@Slf4j
public class MyThread extends Thread {
    @Override
    public void run() {
        super.run();
        log.info("hello world");
    }
}
```

### 线程执行的随机性

```java
@Test
public void thread2() {
    try {
        MyThread2 thread2 = new MyThread2();
        thread2.start();
        for (int i = 0; i < 10; i++) {
            int time = (int) (Math.random() * 1000);
            Thread.sleep(time);
            log.info(Thread.currentThread().getName());
        }
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}


@Slf4j
public class MyThread2 extends Thread {
    @Override
    public void run() {
        try {
            for (int i = 0; i < 10; i++) {
                int time = (int) (Math.random() * 1000);
                Thread.sleep(time);
                log.info(Thread.currentThread().getName());
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

### start()方法的顺序不代表线程启动的顺序

```java

@Test
public void thread3() {
    MyThread3 t1 = new MyThread3(1);
    MyThread3 t2 = new MyThread3(2);
    MyThread3 t3 = new MyThread3(3);
    MyThread3 t4 = new MyThread3(4);
    MyThread3 t5 = new MyThread3(5);
    MyThread3 t6 = new MyThread3(6);
    MyThread3 t7 = new MyThread3(7);
    MyThread3 t8 = new MyThread3(8);
    MyThread3 t9 = new MyThread3(9);
    MyThread3 t10 = new MyThread3(10);
    MyThread3 t11 = new MyThread3(11);
    MyThread3 t12 = new MyThread3(12);
    MyThread3 t13 = new MyThread3(13);
    t1.start();
    t2.start();
    t3.start();
    t4.start();
    t5.start();
    t6.start();
    t7.start();
    t8.start();
    t9.start();
    t10.start();
    t11.start();
    t12.start();
    t13.start();
}

@Slf4j
public class MyThread3 extends Thread {
    private int i;
    public MyThread3(int i){
        super();
        this.i=i;
    }

    @Override
    public void run() {
        System.out.println(i);
    }
}

```

### 多个线程不共享变量

```java
@Test
public void thread4(){
    MyThread4 a = new MyThread4("A");
    MyThread4 b = new MyThread4("B");
    MyThread4 c = new MyThread4("C");
    a.start();
    b.start();
    c.start();
}

@Slf4j
public class MyThread4 extends Thread {
    private int count = 5;

    public MyThread4(String name) {
        super();
        this.setName(name);
    }

    @Override
    public void run() {
        super.run();
        while (count > 0) {
            count--;
            System.out.println(count);
        }
    }
}
```

### 多个现象共享变量

```java
 @Test
public void thread5(){
    MyThread5 myThread5 = new MyThread5();
    Thread a = new Thread(myThread5,"A");
    Thread b = new Thread(myThread5,"B");
    Thread c = new Thread(myThread5,"C");
    Thread d = new Thread(myThread5,"D");
    Thread e = new Thread(myThread5,"E");
    Thread f = new Thread(myThread5,"F");
    a.start();
    b.start();
    c.start();
    d.start();
    e.start();
    f.start();
}

public class MyThread5 extends Thread {
    private int cnt = 5;


//    @Override
//    public void run() {
//        super.run();
//        cnt--;
//        System.out.println(cnt);
//    }

    /**
     * 多个线程执行的时候排队，防止出现两个变量同时操作一个方法
     */
    @Override
    synchronized public void run() {
        super.run();
        cnt--;
        System.out.println(cnt);
    }
}
```

多个线程共享变量可能存在非线程安全问题，当多个线程同时操作一个变量，同时拿到值，这个时候就会出问题，避免这种情况可以使用 `synchronized` 关键字，这个字段是对 `run()` 方法加锁，当 `run()` 方法有其他线程调用的时候，就必须等到其他线程调用结束后才能调用该方法。

## 遇到问题

1.多线程情况下，打印线程名称没有执行

```java
@Test
public void thread5(){
    MyThread5 myThread5 = new MyThread5();
    Thread a = new Thread(myThread5,"A");
    Thread b = new Thread(myThread5,"B");
    Thread c = new Thread(myThread5,"C");
    a.start();
    b.start();
    c.start();
}
```

```java
public class MyThread5 extends Thread {
    private int cnt = 5;


    @Override
    public void run() {
        super.run();
        cnt--;
        System.out.println(Thread.currentThread().getName() + cnt);
        System.out.println(cnt);
    }
}
```

## 死锁
::: tip 死锁是什么？
死锁指两个或两个以上的进程在执行过程中，相互在等待对方释放自己所需的资源导致线程处于等待状态。
:::
死锁产生条件：
- 互斥（即一个资源只有一个线程可使用）
- 占有并等待
- 非抢占
- 循环等待