#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int> v;
    int m=12345;
    for(int i=0;i<5;i++){
        v.push_back(m%10);
        m/=10;
    }
    for(int i=0;i<v.size();i++){
        cout<<v[i]<<" ";
    }
    
    return 0;
}


class Solution {
public:
    vector<int> addToArrayForm(vector<int>& num, int k) {
        int n = num.size();
        long m=0;
        vector<int> ans;
        for(int i=0;i<n;i++){
            m=m*10+num[i];
        }
        m=m+k;
       while(m>0){
        int i=0;
        ans.insert(ans.begin() +i, m%10);
        m=m/10;
        i++;
       }
       return ans;
    }
};