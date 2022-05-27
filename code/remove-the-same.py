fi = open('test.txt', 'r')
txt = fi.readlines()
with open('test_OK.txt', 'a') as f:
    f.close()
for w in txt:
    fi2 = open('test_OK.txt', 'r')
    txt2 = fi2.readlines()
    with open('test_OK.txt', 'a') as f:
        if w not in txt2:
            f.write(w)  
        else:
            print("已去除重复-->"+w)
        f.close()
fi.close()
