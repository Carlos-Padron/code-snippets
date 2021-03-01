extension Date{
 
  //Converts Date to string with the given format
     func convertToStringWithDateFormat(format: String) -> String{
         let dateFormmatrer         = DateFormatter()
         dateFormmatrer.dateFormat  = format
        
         return dateFormmatrer.string(from: self)
    }
}
