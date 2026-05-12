# Week3

### Step4: Think about additional object

![img_124.png](pocu-note/COMP2500/week3/image/img_124.png)
![img_125.png](pocu-note/COMP2500/week3/image/img_125.png)
![img_126.png](pocu-note/COMP2500/week3/image/img_126.png)
![img_127.png](pocu-note/COMP2500/week3/image/img_127.png)
![img_128.png](pocu-note/COMP2500/week3/image/img_128.png)
![img_129.png](pocu-note/COMP2500/week3/image/img_129.png)
![img_130.png](pocu-note/COMP2500/week3/image/img_130.png)
![img_131.png](pocu-note/COMP2500/week3/image/img_131.png)

- member variable `remainingWater` in class `WaterSpray` is private member variable.
    - because of ***Encapsulation***
- public member function `addWater` can be called anywhere. so anyone other than the `Faucet`class can
  modify `remaingWater`

![img_132.png](pocu-note/COMP2500/week3/image/img_132.png)
![img_133.png](pocu-note/COMP2500/week3/image/img_133.png)

#### Is this absolutely need?

![img_134.png](pocu-note/COMP2500/week3/image/img_134.png)
![img_135.png](pocu-note/COMP2500/week3/image/img_135.png)
![img_136.png](pocu-note/COMP2500/week3/image/img_136.png)
![img_137.png](pocu-note/COMP2500/week3/image/img_137.png)
![img_138.png](pocu-note/COMP2500/week3/image/img_138.png)

- In conclusion, step4 is cancel.

### Step5: Add object(flowerpot)

#### status of flowerpot

![img_139.png](pocu-note/COMP2500/week3/image/img_139.png)
![img_140.png](pocu-note/COMP2500/week3/image/img_140.png)
![img_141.png](pocu-note/COMP2500/week3/image/img_141.png)
![img_142.png](pocu-note/COMP2500/week3/image/img_142.png)
![img_143.png](pocu-note/COMP2500/week3/image/img_143.png)
![img_145.png](pocu-note/COMP2500/week3/image/img_145.png)
![img_144.png](pocu-note/COMP2500/week3/image/img_144.png)
![img_146.png](pocu-note/COMP2500/week3/image/img_146.png)
![img_147.png](pocu-note/COMP2500/week3/image/img_147.png)

#### behavior of flowerpot

![img_148.png](pocu-note/COMP2500/week3/image/img_148.png)
![img_149.png](pocu-note/COMP2500/week3/image/img_149.png)
![img_150.png](pocu-note/COMP2500/week3/image/img_150.png)
![img_151.png](pocu-note/COMP2500/week3/image/img_151.png)
![img_152.png](pocu-note/COMP2500/week3/image/img_152.png)
![img_153.png](pocu-note/COMP2500/week3/image/img_153.png)
![img_154.png](pocu-note/COMP2500/week3/image/img_154.png)

#### Implementations that don't accurately reflect state

![img_155.png](pocu-note/COMP2500/week3/image/img_155.png)
![img_156.png](pocu-note/COMP2500/week3/image/img_156.png)
![img_157.png](pocu-note/COMP2500/week3/image/img_157.png)
![img_158.png](pocu-note/COMP2500/week3/image/img_158.png)
![img_159.png](pocu-note/COMP2500/week3/image/img_159.png)
![img_160.png](pocu-note/COMP2500/week3/image/img_160.png)
![img_161.png](pocu-note/COMP2500/week3/image/img_161.png)
![img_162.png](pocu-note/COMP2500/week3/image/img_162.png)
![img_163.png](pocu-note/COMP2500/week3/image/img_163.png)
![img_164.png](pocu-note/COMP2500/week3/image/img_164.png)
![img_165.png](pocu-note/COMP2500/week3/image/img_165.png)
![img_166.png](pocu-note/COMP2500/week3/image/img_166.png)
![img_167.png](pocu-note/COMP2500/week3/image/img_167.png)

### Step6: Autonomy of Object in OOP

#### Method1

![img_168.png](pocu-note/COMP2500/week3/image/img_168.png)
![img_169.png](pocu-note/COMP2500/week3/image/img_169.png)
![img_170.png](pocu-note/COMP2500/week3/image/img_170.png)
![img_171.png](pocu-note/COMP2500/week3/image/img_171.png)
![img_172.png](pocu-note/COMP2500/week3/image/img_172.png)

- Better encapsulation and data abstraction

#### Method2

![img_173.png](pocu-note/COMP2500/week3/image/img_173.png)
![img_174.png](pocu-note/COMP2500/week3/image/img_174.png)
![img_175.png](pocu-note/COMP2500/week3/image/img_175.png)
![img_176.png](pocu-note/COMP2500/week3/image/img_176.png)
![img_177.png](pocu-note/COMP2500/week3/image/img_177.png)
![img_178.png](pocu-note/COMP2500/week3/image/img_178.png)
![img_179.png](pocu-note/COMP2500/week3/image/img_179.png)
![img_180.png](pocu-note/COMP2500/week3/image/img_180.png)

- This is concept of encapsulation and object autonomy
- Objects act with ***autonomy***
    - So when translating to Korean, understand that "개체" are more appropriate than "객체"

![img_181.png](pocu-note/COMP2500/week3/image/img_181.png)

- The parameter's type was changed from int to WaterSpray, dependency between two class gets stronger.

![img_182.png](pocu-note/COMP2500/week3/image/img_182.png)
![img_183.png](pocu-note/COMP2500/week3/image/img_183.png)

- less flexible

### Step7: separate object

![img_184.png](pocu-note/COMP2500/week3/image/img_184.png)
![img_185.png](pocu-note/COMP2500/week3/image/img_185.png)
![img_186.png](pocu-note/COMP2500/week3/image/img_186.png)
![img_187.png](pocu-note/COMP2500/week3/image/img_187.png)
![img_188.png](pocu-note/COMP2500/week3/image/img_188.png)
![img_189.png](pocu-note/COMP2500/week3/image/img_189.png)
![img_190.png](pocu-note/COMP2500/week3/image/img_190.png)

- this is ***Aggregation*** not ***Composition***
    - instance of each class can be used independently

![img_191.png](pocu-note/COMP2500/week3/image/img_191.png)
![img_192.png](pocu-note/COMP2500/week3/image/img_192.png)
![img_193.png](pocu-note/COMP2500/week3/image/img_193.png)
![img_194.png](pocu-note/COMP2500/week3/image/img_194.png)
![img_195.png](pocu-note/COMP2500/week3/image/img_195.png)
![img_196.png](pocu-note/COMP2500/week3/image/img_196.png)
![img_197.png](pocu-note/COMP2500/week3/image/img_197.png)
![img_198.png](pocu-note/COMP2500/week3/image/img_198.png)

#### Flexible design is not the best!

![img_199.png](pocu-note/COMP2500/week3/image/img_199.png)
![img_200.png](pocu-note/COMP2500/week3/image/img_200.png)
![img_201.png](pocu-note/COMP2500/week3/image/img_201.png)
![img_202.png](pocu-note/COMP2500/week3/image/img_202.png)
![img_203.png](pocu-note/COMP2500/week3/image/img_203.png)
![img_204.png](pocu-note/COMP2500/week3/image/img_204.png)
![img_205.png](pocu-note/COMP2500/week3/image/img_205.png)
![img_206.png](pocu-note/COMP2500/week3/image/img_206.png)
![img_207.png](pocu-note/COMP2500/week3/image/img_207.png)
![img_208.png](pocu-note/COMP2500/week3/image/img_208.png)
![img_209.png](pocu-note/COMP2500/week3/image/img_209.png)
![img_210.png](pocu-note/COMP2500/week3/image/img_210.png)

#### OOP guideline

![img_211.png](pocu-note/COMP2500/week3/image/img_211.png)
![img_212.png](pocu-note/COMP2500/week3/image/img_212.png)

### Step8: Increase reusability correctly

#### Method1: Introduce the concept of standards

- problem: caller create head and body separately. this is complicated for user(caller) and it has poor readability

![img_213.png](pocu-note/COMP2500/week3/image/img_213.png)
![img_214.png](pocu-note/COMP2500/week3/image/img_214.png)
![img_215.png](pocu-note/COMP2500/week3/image/img_215.png)
![img_216.png](pocu-note/COMP2500/week3/image/img_216.png)

- Implementing standards as enum

![img_217.png](pocu-note/COMP2500/week3/image/img_217.png)
![img_218.png](pocu-note/COMP2500/week3/image/img_218.png)
![img_219.png](pocu-note/COMP2500/week3/image/img_219.png)
![img_220.png](pocu-note/COMP2500/week3/image/img_220.png)

- Make it easier for callers by creating a constructor that takes an enumeration as an argument

#### Method2: Integrating common logic

- problem: The FlowerPot.addWater() method logic is complex

![img_221.png](pocu-note/COMP2500/week3/image/img_221.png)
![img_222.png](pocu-note/COMP2500/week3/image/img_222.png)
![img_223.png](pocu-note/COMP2500/week3/image/img_223.png)
![img_224.png](pocu-note/COMP2500/week3/image/img_224.png)
![img_225.png](pocu-note/COMP2500/week3/image/img_225.png)
![img_226.png](pocu-note/COMP2500/week3/image/img_226.png)
![img_227.png](pocu-note/COMP2500/week3/image/img_227.png)
